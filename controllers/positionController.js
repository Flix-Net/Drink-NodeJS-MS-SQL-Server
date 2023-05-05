    import sql from "mssql";
    import config from "../config.js";
    import utils from "../data/utils.js";

    export const getPositionsController = async (req, res) => {
        try {
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Requests');

            const result = await request.query(sqlQueries.GetAllPositions);

            res.status(200).json({
                success: true,
                message: "Успешная загрузка позиций.",
                positions: result.recordset,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки позиций",
                error: error.message,
            });
        }
    }

    export const addNewPositionController = async (req, res) => {
        try {
            let data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("Position", sql.NVarChar(50), data.Position)
                .query(sqlQueries.SP_AddNewPosition);

            res.status(200).json({
                success: true,
                message: "Успешное добавление позиции",
                positions: result.recordset,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка добавления позиции.",
                error: error.message,
            });
        }
    }

    export const deletePositionController = async (req, res) => {
        try {
            let PositionID = req.params.id;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("PositionID", sql.NVarChar(50), PositionID)
                .query(sqlQueries.SP_DeletePosition);

            res.status(200).json({
                success: true,
                message: "Успешное удаление позиции.",
                positions: result.recordset,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка удаления позиции.",
                error: error.message,
            });
        }
    }