    import utils from "../data/utils.js";
    import sql from "mssql";
    import config from "../config.js";

    import {
            GetHistoryProductionProducts,
            GetHistorySaleProducts,
    } from "../data/events/index.js";

    export const addNewProductController = async (req, res) => {
        try {
            const data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            await request
                .input("Name", sql.NVarChar(50), data.Name)
                .input("Unit", sql.TinyInt, data.Unit)
                .query(sqlQueries.SP_AddNewProduct);

            res.status(200).json({
                success: true,
                message: "Продукт успешно добавлен",
                product: data,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка добавления продукта",
                error: error.message,
            });
        }
    };

    export const editProductController = async (req, res)=> {
        try {
            const data = req.body;

            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            await request
                .input("IDProduct", sql.TinyInt, data.IDProduct)
                .input("NewNameProduct", sql.NVarChar(50), data.NewNameProduct)
                .input("NewUnit", sql.TinyInt, data.NewUnit)
                .query(sqlQueries.SP_EditProduct);

            res.status(200).json({
                success: true,
                message: "Продукт успешно изменён.",
                product: data,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка редактирования продукта!",
                error: error.message,
            });
        }
    }

    export const deleteProductController = async (req, res) => {
        try {
            const IDProduct = req.params.id;

            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            await request
                .input("IDProduct", sql.TinyInt, IDProduct)
                .query(sqlQueries.SP_DeleteProduct);

            res.status(200).json({
                success: true,
                message: "Продукт успешно удален!",
                product: IDProduct,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка удаления продукта",
                error: error.message,
            });
        }
    }


    export const getAllProductsController = async (req, res) => {
            try{
                await sql.connect(config.sql);
                let request = new sql.Request();
                const sqlQueries = await utils('events/Views');

                const result = await request.query(sqlQueries.GetAllProducts);


                res.status(200).json({
                    success: true,
                    message: "Продукты успешно загружены!",
                    arrProducts: result.recordset,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Ошибка удаления продукта",
                    error: error.message,
                });
            }



    }


    export const checkComponentAvailabilityController = async (req, res) => {
        try{
            let data = req.body;
            let Status;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            let result = await request
                .input("productID", sql.TinyInt, data.productID )
                .output("returnValue", sql.Int)
                .execute("[dbo].[CheckComponentAvailability]");

            result.output.returnValue ?
                Status = 1 :
                Status = 0;

            res.status(200).json({
                success: true,
                Status,
                message: "Проверка успешно завершена!"
            });
        }
        catch (error)
        {
            res.status(400).send(error.message, "Ошибка проверки!");
        }
    }



    export const productionProductController = async (req, res) => {
        try{
            let data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            await request
                .input("IDRawMaterial", sql.TinyInt, data.IDRawMaterial )
                .input("countRawMaterial", sql.Decimal(10, 2), data.countRawMaterial )
                .input("IDProduct", sql.TinyInt, data.IDProduct )
                .input("IDEmployee", sql.TinyInt, data.IDEmployee )
                .query(sqlQueries.SP_ProductionProduct);

            res.status(200).json({
                success: true,
                message: "Продукт успешно произведен!"
            });
        }
        catch (error)
        {
            res.status(400).send(error.message, "Ошибка производства продукта!");
        }
    }


    export const addFinishProductController = async (req, res) => {
        try {
            let data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("IDProduct", sql.TinyInt, data.IDProduct )
                .input("countProducts", sql.Decimal(10, 2), data.countProducts )
                .input("IDEmployee", sql.TinyInt, data.IDEmployee )
                .query(sqlQueries.SP_AddFinishProduct);

            res.status(200).json({
                success: true,
                message: "Продукт успешно зарегистрирован!"
            });
        }
        catch (error)
        {
            res.status(400).send(error.message, "Ошибка регистрации продукта!");

        }
    }


    export const saleProductController = async (req, res) => {
        try{
            let data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("IDProduct", sql.TinyInt, data.IDProduct )
                .input("countProduct", sql.Decimal(10, 2), data.countProduct )
                .input("IDEmployee", sql.TinyInt, data.IDEmployee )
                .output("returnProfit", sql.Decimal(10, 5))
                .output("returnStatus", sql.Int)
                .execute("[dbo].[SaleProduct]");

            console.log({
                success: true,
                Status: result.output.returnStatus,
                Profit: result.output.returnProfit,
            });

            res.status(200).json({
                success: true,
                Status: result.output.returnStatus,
                Profit: result.output.returnProfit,
            });
        }
        catch (error)
        {
            res.status(500).json({
                success: false,
                message: "Ошибка продажи продукта",
                error: error.message,
            });
        }
    }

    export const getHistoryProductionProductsController = async (req, res) => {
        try {
            let data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("TABLE_NAME", sql.NVarChar(50), data.TABLE_NAME)
                .input("DATE_START", sql.NVarChar(50), data.DATE_START)
                .input("DATE_END", sql.NVarChar(50), data.DATE_END)
                .query(sqlQueries.SP_SelectionDataByDate);

            res.status(200).json({
                success: true,
                message: "История успешно загружена.",
                purchase: result.recordset,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки истории!",
                error: error.message,
            });
        }
    }

    export const getHistorySaleProductsController = async (req, res) => {
        try {
            let data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("TABLE_NAME", sql.NVarChar(50), data.TABLE_NAME)
                .input("DATE_START", sql.NVarChar(50), data.DATE_START)
                .input("DATE_END", sql.NVarChar(50), data.DATE_END)
                .query(sqlQueries.SP_SelectionDataByDate);

            res.status(200).json({
                success: true,
                message: "История успешно загружена.",
                purchase: result.recordset,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки истории!",
                error: error.message,
            });
        }
    }