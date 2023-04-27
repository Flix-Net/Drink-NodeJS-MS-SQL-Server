import utils from "../utils.js";
import sql from "mssql";
import config from "../../config.js";





export const addNewRawMaterial = async (data)=>{
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request
            .input("Name", sql.NVarChar(50),data.Name )
            .input("Unit", sql.TinyInt,data.Unit )
            .query(sqlQueries.AddNewRawMat);

        return result.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
}

export const PurchaseRawMaterial = async (data) => {
    try{

        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("IDRawMaterial", sql.TinyInt,data.IDRawMaterial )
            .input("countRawMaterial", sql.Decimal(10, 2),data.countRawMaterial )
            .input("costRawMaterial", sql.Decimal(10, 2),data.costRawMaterial )
            .input("IDEmployee", sql.TinyInt,data.IDEmployee )
            .query(sqlQueries.SP_PurchaseRawMat);

        return result.recordset;
    }
    catch (err)
    {
        console.log(`Не удалось совершить покупку, ${err}`);
    }
}


export const GetHistoryPurchaseRawMaterials = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Views');

        const result = await request.query(sqlQueries.GetHistoryPurchaseRaw);

        return result.recordset;
    }
    catch (err)
    {
        console.log(`Не удалось получить историю покупок, ${err}`);
    }
}

export const GetHistorySaleProducts = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Views');

        const result = await request.query(sqlQueries.GetHistorySaleProducts);

        return result.recordset;
    }
    catch (err)
    {
        console.log(`Не удалось получить историю покупок, ${err}`);
    }
}

export const GetHistoryProductionProducts = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Views');

        const result = await request.query(sqlQueries.GetHistoryProductionProduct);

        return result.recordset;
    }
    catch (err)
    {
        console.log(`Не удалось получить историю покупок, ${err}`);
    }
}




export const ProductionProduct = async (data) => {
    try
    {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("IDRawMaterial", sql.TinyInt, data.IDRawMaterial )
            .input("countRawMaterial", sql.Decimal(10, 2), data.countRawMaterial )
            .input("IDProduct", sql.TinyInt, data.IDProduct )
            .query(sqlQueries.SP_ProductionProduct);


        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}

export const AddFinishProduct = async (data) => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("IDProduct", sql.TinyInt, data.IDProduct )
            .input("countProducts", sql.Decimal(10, 2), data.countProducts )
            .input("IDEmployee", sql.TinyInt, data.IDEmployee )
            .query(sqlQueries.SP_AddFinishProduct);

        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}

export const SaleProduct = async (data) => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("IDProduct", sql.TinyInt, data.IDProduct )
            .input("countProduct", sql.Decimal(10, 2), data.countProduct )
            .input("priceProduct", sql.Decimal(10, 2), data.priceProduct )
            .input("IDEmployee", sql.TinyInt, data.IDEmployee )
            .query(sqlQueries.SP_SaleProduct);

        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}





export const selectionDataByDate = async (data) => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("TABLE_NAME", sql.NVarChar(50), data.TABLE_NAME)
            .input("DATE_START", sql.NVarChar(50), data.DATE_START)
            .input("DATE_END", sql.NVarChar(50), data.DATE_END)
            .query(sqlQueries.SP_SelectionDataByDate);

        return result.recordset;
    }
    catch (error)
    {
        console.log(`Ошибка: ${error.message}`);
    }
}