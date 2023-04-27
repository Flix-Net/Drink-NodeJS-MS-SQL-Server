import {
    GetMyBalance,
    GetEmployees,
    PurchaseRawMaterial,

    GetHistoryPurchaseRawMaterials,
    GetComponentsByID,
    GetCountCompFromWarehouse,
    AddFinishProduct, addNewEmployee, getAllPositions, selectionDataByDate
} from "../data/events/index.js";





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