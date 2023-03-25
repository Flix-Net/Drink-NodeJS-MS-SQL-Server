import utils from "../utils.js";
import sql from "mssql";
import config from "../../config.js";


export const getAllProducts = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request.query(sqlQueries.GetAllProducts);

        return result.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getRawMaterial = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request.query(sqlQueries.GetRawMaterial);

        // const result = await request.query(`select * from FinishProduct`);
        return result.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
}

export const addNewProduct = async (data)=>{
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        await request
            .input("Name", sql.NVarChar(50),data.Name )
            .input("Unit", sql.TinyInt,data.Unit )
            .query(sqlQueries.AddNewProduct);

        return ("Продукт успешно добавлен");
    }
    catch (error) {
        console.log(error.message);
    }
}

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


export const GetMyBalance = async () => {
    try{
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request.query(sqlQueries.GetMyBalance);

        // const result = await request.query(`select * from FinishProduct`);
        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}

export const GetEmployees = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request.query(sqlQueries.GetEmployees);

        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}


export const GetUnit = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request.query(sqlQueries.GetUnit);

        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}

export const GetComponentsByID = async (data) => {
    try{
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("inputID", sql.TinyInt, data.inputID )
            .query(sqlQueries.SP_GetComponentsByID);

        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}


export const GetCountCompFromWarehouse = async (ComponentID) => {
    try{
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Stored_Procedures');

        const result = await request
            .input("ComponentID", sql.TinyInt, ComponentID )
            .query(sqlQueries.SP_GetCountCompFromWarehouse);

        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
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

export const addNewEmployee = async (data) => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request
            .input("FIO", sql.NVarChar(50), data.FIO )
            .input("Position", sql.TinyInt, data.Position )
            .input("Salary", sql.Decimal(10, 2), data.Salary )
            .input("Address", sql.NVarChar(50), data.Address )
            .input("Phone", sql.NVarChar(50), data.Phone )
            .query(sqlQueries.AddNewEmployee);
        return ("Сотрудник успешно добавлен!");
    }
    catch (error)
    {
        console.log(error.message);
    }
}

export const getAllPositions = async () => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request.query(sqlQueries.GetAllPositions);

        return result.recordset;
    }
    catch (error)
    {
        console.log(error.message);
    }
}

export const addNewUnit = async (data) => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        const result = await request
            .input("Name", sql.NVarChar(50), data.Name)
            .query(sqlQueries.AddNewUnit);
        return ("Единица измерения успешно добавлена!");
    }
    catch (error)
    {
        console.log(`Ошибка: ${error.message}`);
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

export const AddNewComponent = async (data) => {
    try {
        await sql.connect(config.sql);
        let request = new sql.Request();
        const sqlQueries = await utils('events/Requests');

        await request
            .input("Product", sql.TinyInt, data.Product)
            .input("RawMaterial", sql.TinyInt, data.RawMaterial)
            .input("Count", sql.Decimal(10,2), data.Count)
            .query(sqlQueries.EditComponents);

        return ("Компонент успешно добавлен!");
    }
    catch (error)
    {
        console.log(`Ошибка: ${error.message}`);
    }
}