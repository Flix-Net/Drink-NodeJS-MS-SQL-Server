
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