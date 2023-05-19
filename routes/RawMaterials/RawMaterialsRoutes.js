    import express  from 'express';
    import {
    addNewRawMaterialController,
    deleteRawMaterialController,
    getRawMaterialController,
    purchaseRawMaterialController, selectionDataByDateController}
        from "../../controllers/rawMaterialController.js";

    const router = express.Router();

    router.post("/addNewRawMaterial", addNewRawMaterialController);
    router.delete("/deleteRawMaterial/:id", deleteRawMaterialController);
    router.get('/getRawMaterials', getRawMaterialController);
    router.post('/purchaseRawMaterial', purchaseRawMaterialController);
    router.post('/selectionDataByDate', selectionDataByDateController);


    export default router;