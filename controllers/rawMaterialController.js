import {addNewRawMaterial, GetCountCompFromWarehouse, getRawMaterial} from "../data/events/index.js";

export const addNewRawMaterialController = async (req, res) => {
    try {
        let data = req.body;
        const newRawMaterial = await addNewRawMaterial(data);

        return res.json(newRawMaterial);
    }
    catch (error) {
        res.status(400).send(error.message, "Ошибка добавления продукта!");
    }
}


export const getRawMaterialController = async (req, res) => {
    try {

        const rawMaterialList = await getRawMaterial();

        return res.json(rawMaterialList);

    } catch (error) {
        res.status(400).send(error.message, "Ошибка вывода продуктов!");
    }
}

