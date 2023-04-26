import {
    GetMyBalance,
    GetEmployees,
    PurchaseRawMaterial,

    GetHistoryPurchaseRawMaterials,
    GetComponentsByID,
    GetCountCompFromWarehouse,
    AddFinishProduct, addNewEmployee, getAllPositions, selectionDataByDate
} from "../data/events/index.js";

export const getBalanceController = async (req, res)=>{
    try{
        const myBalance = await GetMyBalance();

        return res.json(myBalance[0].Sum);
    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка добавления продукта!");
    }
}

export const getEmployeesController = async (req, res)=>{
    try{
        const employees = await GetEmployees();

        return res.json(employees);
    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка добавления продукта!");

    }
}

export const purchaseRawMaterialController = async (req, res) => {
    try {
        const data = req.body;
        console.log(`Количество: ${data.countRawMaterial}`);
        let total = await PurchaseRawMaterial(data);
        if (total === undefined)
        {
            return res.json("Недостаточно средств на балансе!");
        }
        else
        {
            return res.json(total);
        }


    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка добавления продукта!");

    }
}

export const getHistoryPurchaseRawMatController = async (req, res) => {
    try {
        let history = await GetHistoryPurchaseRawMaterials();

        return res.json(history);
    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка добавления продукта!");

    }
}



export const getComponentsByIDController = async (req, res)=>{
    try{
        let data = req.body;
        const components = await GetComponentsByID(data);

        return res.json(components);
    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка добавления продукта!");

    }
}

export const getCountMaterialFromWarehouseController = async (req, res) => {
    try {
        let params = req.body;
        const countMaterialList = await GetCountCompFromWarehouse(params.ComponentID);

        return res.json(countMaterialList);
    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка вывода продуктов!");

    }
}

export const AddFinishProductController = async (req, res) => {
    try {
        let params = req.body;
        const countMaterialList = await AddFinishProduct(params);

        return res.json(countMaterialList);
    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка вывода продуктов!");

    }
}

export const addNewEmployeeController = async (req, res) => {
    try {
        let data = req.body;
        const newEmployee = await addNewEmployee(data);

        return res.json({message:newEmployee});
    }
    catch (error) {
        res.status(400).send(error.message, "Ошибка добавления сотрудника!");
    }
}

export const getPositionsController = async (req, res) => {
    try {
        const arrPositions = await getAllPositions();

        return res.json(arrPositions);
    }
    catch (error) {
        res.status(400).send(error.message, "Ошибка добавления сотрудника!");
    }
}

export const selectionDataByDateController = async (req, res) => {
    try {
        let data = req.body;
        const selectedData = await selectionDataByDate(data);

        return res.json(selectedData);
    }
    catch (error) {
        res.status(400).send(error.message, "Ошибка добавления новой единицы измерения!");
    }
}