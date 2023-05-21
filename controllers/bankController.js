    import sql from "mssql";
    import config from "../config.js";
    import utils from "../data/utils.js";

    export const getRecordsController = async (req, res)=>{
        try{

            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Views');

            const result = await request.query(sqlQueries.GetPaymentsCredit);

            res.status(200).json({
                success: true,
                payments: result.recordset
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки выплат!",
                error: error.message,
            });
        }
    }

    export const PaymentController = async (req, res)=>{
        try{

            const data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("datePay", sql.Date, data.datePay )
                .query(sqlQueries.SP_PaymentCredit)

            res.status(200).json({
                success: true,
                status: result.recordset[0].Status,
                message: "Платёж выполнен.",
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка платежа!",
                error: error.message,
            });
        }
    }


    export const TakeCreditController = async (req, res)=>{
        try{

            const data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("creditSum", sql.Float, data.creditSum )
                .input("Period", sql.Int, data.Period )
                .input("Percent", sql.Int, data.Percent )
                .input("Fine", sql.Int, data.Fine )
                .query(sqlQueries.SP_TakeCredit)

            res.status(200).json({
                success: true,

                message: "Платёж выполнен.",
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка платежа!",
                error: error.message,
            });
        }
    }