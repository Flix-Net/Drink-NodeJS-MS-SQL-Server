    import sql from "mssql";
    import config from "../config.js";
    import utils from "../data/utils.js";

    export const addNewRawMaterialController = async (req, res) => {
        try {
            const data = req.body;
            let messageStatus;
            console.log(data);
            await sql.connect(config.sql);
            let request = new sql.Request();

            const result = await request
                .input("Name", sql.NVarChar(50),data.Name )
                .input("Unit", sql.TinyInt,data.Unit )
                .output("returnValue", sql.Int)
                .execute("[dbo].[AddNewRawMaterial]");

            result.output.returnValue ?
                messageStatus = "Сырье успешно добавлено." :
                messageStatus = "Такое сырье уже есть.";

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

    export const deleteRawMaterialController = async (req, res) =>
    {
        try {

            let rawMaterialID = req.params.id;
            console.log(rawMaterialID);
            await sql.connect(config.sql);
            const sqlQueries = await utils('events/Stored_Procedures');
            let request = new sql.Request();

            const result = await request
                .input("rawMaterialID", sql.TinyInt, rawMaterialID )
                .query(sqlQueries.SP_DeleteRawMaterial);

            res.status(200).json({
                success: true,
                message: "Успешное удаление сырья."
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка удаления сырья!",
                error: error.message,
            });
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

    export const purchaseRawMaterialController = async (req, res) => {
        try{
            let data = req.body;
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("IDRawMaterial", sql.TinyInt,data.IDRawMaterial )
                .input("countRawMaterial", sql.Decimal(10, 2),data.countRawMaterial )
                .input("costRawMaterial", sql.Decimal(10, 2),data.costRawMaterial )
                .input("IDEmployee", sql.TinyInt,data.IDEmployee )
                .query(sqlQueries.SP_PurchaseRawMat);

            res.status(200).json({
                success: true,
                message: "Покупка успешно завершена.",
                product: result.recordset,
            });
        }
        catch (err)
        {
            console.log(`Не удалось совершить покупку, ${err}`);
        }
    }