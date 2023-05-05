import utils from "../data/utils.js";
import sql from "mssql";
import config from "../config.js";

export const getUnitController = async (req, res)=>{
    try{
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request.query(sqlQueries.GetUnit);


        res.status(200).json({
            success: true,
            message: "Юниты успешно загружены.",
            unit: result.recordset
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Ошибка загрузки юнитов!",
            error: error.message,
        });
    }
}


export const addNewUnitController = async (req, res) => {
    try {
        const data = req.body;
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("Name", sql.NVarChar(50), data.Name)
            .query(sqlQueries.SP_AddNewUnit);

        res.status(200).json({
            success: true,
            message: "Единица измерения успешно добавлена!"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Ошибка добавления новой единицы измерения!",
            error: error.message,
        });
    }
}


export const deleteUnitController = async (req, res) => {
    try {
        const UnitID = req.params.id;
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("UnitID", sql.TinyInt, UnitID)
            .query(sqlQueries.SP_DeleteUnit);

        res.status(200).json({
            success: true,
            message: "Единица измерения успешно удалена!"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Ошибка удаления единицы измерения!",
            error: error.message,
        });
    }
}