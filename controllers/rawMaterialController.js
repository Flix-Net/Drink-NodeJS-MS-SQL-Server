import {addNewRawMaterial} from "../data/events/index.js";
import sql from "mssql";
import config from "../config.js";
import utils from "../data/utils.js";

export const addNewRawMaterialController = async (req, res) => {
    try {
        let data = req.body;
        const newRawMaterial = await addNewRawMaterial(data);

        return res.json(newRawMaterial);
    }
    catch (error) {
        res.status(400).send(error.message, "Ошибка добавления продукта!");
    }
}


export const getRawMaterialController = async (req, res) => {
    try {

        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Views');

        const result = await request.query(sqlQueries.GetRawMaterial);

        res.status(200).json({
            success: true,
            message: "Компоненты успешно загружены.",
            product: result.recordset,
        });

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Ошибка загрузки компонентов!",
            error: error.message,
        });
    }
}

