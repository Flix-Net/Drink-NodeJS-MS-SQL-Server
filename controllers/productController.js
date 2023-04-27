    import utils from "../data/utils.js";
    import sql from "mssql";
    import config from "../config.js";

    import {
        GetHistoryProductionProducts,
        GetHistorySaleProducts,
        ProductionProduct,
        SaleProduct
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

    export const productionProductController = async (req, res) => {
        try{
            let params = req.body;
            await ProductionProduct(params);
            res.json("Продукт произведен!");
        }
        catch (error)
        {
            res.status(400).send(error.message, "Ошибка вывода продуктов!");
        }
    }

    export const saleProductController = async (req, res) => {
        try{
            let params = req.body;
            const result = await SaleProduct(params);
            res.json(result);
        }
        catch (error)
        {
            res.status(400).send(error.message, "Ошибка вывода продуктов!");
        }
    }

    export const getHistorySaleProductsController = async (req, res) => {
        try{
            const result = await GetHistorySaleProducts();
            res.json(result);
        }
        catch (error)
        {
            res.status(400).send(error.message, "Ошибка вывода продуктов!");
        }
    }

    export const getHistoryProductionProductsController = async (req, res) => {
        try{
            const result = await GetHistoryProductionProducts();
            res.json(result);
        }
        catch (error)
        {
            res.status(400).send(error.message, "Ошибка вывода продуктов!");
        }
    }

