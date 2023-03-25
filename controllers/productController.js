import {
    AddNewComponent,
    addNewProduct,
    getAllProducts, GetHistoryProductionProducts,
    GetHistorySaleProducts,
    ProductionProduct,
    SaleProduct
} from "../data/events/index.js";

export const addNewProductController = async (req, res) => {
    try {
        let data = req.body;
        const result = await addNewProduct(data);

        return res.json(result);
    }
    catch (error) {
        res.status(400).send(error.message, "Ошибка добавления продукта!");
    }
}

export const getAllProductsController = async (req, res) => {
    try {

        const productsList = await getAllProducts();

        return res.json(productsList);

    } catch (error) {
        res.status(400).send(error.message, "Ошибка вывода продуктов!");
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

export const addNewComponentController = async (req, res) => {
    try {
        const data = req.body;
        const result = await AddNewComponent(data);
        res.json(result);
    }
    catch (error)
    {
        res.status(400).send(error.message, "Ошибка добавления компонента!");
    }
}