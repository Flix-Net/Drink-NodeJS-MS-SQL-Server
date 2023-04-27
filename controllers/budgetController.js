    import sql from "mssql";
    import config from "../config.js";
    import utils from "../data/utils.js";

    export const getBalanceController = async (req, res)=>{
        try{

                await sql.connect(config.sql);
                let request = new sql.Request();
                const sqlQueries = await utils('events/Requests');

                const result = await request.query(sqlQueries.GetMyBalance);

                res.status(200).json({
                    success: true,
                    message: "Баланс успешно загружен.",
                    budget: result.recordset[0].Sum
                });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки баланса!",
                error: error.message,
            });
        }
    }