    import sql from "mssql";
    import config from "../config.js";
    import utils from "../data/utils.js";



    export const getSalaryInfoController = async (req, res)=>{
        try{
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Views');

            const result = await request.query(sqlQueries.GetPaymentData);


            res.status(200).json({
                success: true,
                recordSalary: result.recordset
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки информации!",
                error: error.message,
            });
        }
    }

    export const getPaymentListController = async (req, res)=>{
        try{
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Views');

            const result = await request.query(sqlQueries.GetPaymentList);


            res.status(200).json({
                success: true,
                recordPayment: result.recordset
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки информации!",
                error: error.message,
            });
        }
    }

    export const getNewPaymentListController = async (req, res)=>{
        try{

            let data = req.body;


            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("MonthID", sql.Int, data.MonthID )
                .input("Year", sql.Int, data.Year )
                .query(sqlQueries.SP_NewPaymentList);




            res.status(200).json({
                success: true,
                //recordSalary: result.recordset
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки информации!",
                error: error.message,
            });
        }
    }

    export const cancelPaymentsController = async (req, res)=>{
        try{

            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Requests');

            const result = await request
                .query(sqlQueries.CancelPayments);


            res.status(200).json({
                success: true,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки информации!",
                error: error.message,
            });
        }
    }