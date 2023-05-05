    import express  from 'express';
    import {
    addNewRawMaterialController,
    deleteRawMaterialController,
    getRawMaterialController,
    purchaseRawMaterialController
    } from "../../controllers/rawMaterialController.js";
    const router = express.Router();

    router.post("/addNewRawMaterial", addNewRawMaterialController);
    router.delete("/deleteRawMaterial/:id", deleteRawMaterialController);
    router.get('/getRawMaterials', getRawMaterialController);
    router.post('/purchaseRawMaterial', purchaseRawMaterialController);


    export default router;