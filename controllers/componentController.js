    import sql from "mssql";
    import config from "../config.js";
    import utils from "../data/utils.js";

    export const getComponentsByIDController = async (req, res)=>{
        try{
            let data = req.body;

            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("inputID", sql.TinyInt, data.inputID )
                .query(sqlQueries.SP_GetComponentsByID);

            res.status(200).json({
                success: true,
                message: "Загрузка рецепта успешна.",
                components: result.recordset,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки рецепта",
                error: error.message,
            });
        }
    }

    export const getCountMaterialFromWarehouseController = async (req, res) => {
        try {
            let params = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("ComponentID", sql.TinyInt, params.ComponentID )
                .query(sqlQueries.SP_GetCountCompFromWarehouse);

            res.status(200).json({
                success: true,
                message: "Загрузка рецепта успешна.",
                components: result.recordset,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки рецепта",
                error: error.message,
            });
        }
    }


    // Добавить компонент в рецепт продукта
    export const addNewComponentController = async (req, res) => {
        try {
            const data = req.body;
            let messageStatus = "";
            console.log(data);
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            // const result = await request
            //     .input("productID", sql.TinyInt, data.productID)
            //     .input("rawMaterialID", sql.TinyInt, data.rawMaterialID)
            //     .input("count", sql.Decimal(10,2), data.count)
            //     .output("returnValue", sql.Int)
            //     .query(sqlQueries.SP_AddComponentInProduct);

            const result = await request
                .input("productID", sql.TinyInt, data.productID)
                .input("rawMaterialID", sql.TinyInt, data.rawMaterialID)
                .input("count", sql.Decimal(10,2), data.count)
                .output("returnValue", sql.Int)
                .execute("[dbo].[AddComponentInProduct]");


            debugger
            console.log(result.output.returnValue);
            result.output.returnValue ?
                messageStatus = "Компонент успешно добавлен." :
                messageStatus = "Такой компонент уже есть в рецепте.";


            res.status(200).json({
                success: true,
                message: messageStatus
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка добавления компонента!",
                error: error.message,
            });
        }
    }

    // Удаление компонента из рецепта продукта
    export const deleteComponentFromProductController = async (req, res) => {
        try {
            const {productID, rawMaterialID} = req.params;

            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            await request
                .input("productID", sql.TinyInt, productID)
                .input("rawMaterialID", sql.TinyInt, rawMaterialID)
                .query(sqlQueries.SP_DeleteComponentFromProduct);


            res.status(200).json({
                success: true,
                message: "Компонент успешно удалён."
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка удаления копмонента!",
                error: error.message,
            });
        }
    }

    export const editConfigComponentController = async (req, res) => {
        try {
            const data = req.body;
            console.log(data);
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            await request
                .input("productID", sql.TinyInt, data.productID)
                .input("rawMaterialID", sql.TinyInt, data.rawMaterialID)
                .input("count", sql.Decimal(10,2), data.count)
                .query(sqlQueries.SP_EditConfigComponent);


            res.status(200).json({
                success: true,
                message: "Соотношение компонента успешно изменено."
            });

        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка изменения сотношения компонента!",
                error: error.message,
            });
        }
    }