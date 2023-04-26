import express  from 'express';
import {addNewRawMaterialController, getRawMaterialController} from "../../controllers/rawMaterialController.js";
const router = express.Router();

router.post("/addNewRawMaterial", addNewRawMaterialController)
router.get('/getRawMaterials', getRawMaterialController);

export default router;