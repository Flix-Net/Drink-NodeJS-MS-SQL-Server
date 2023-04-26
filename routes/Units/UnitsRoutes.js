import express  from 'express';
import {getUnitController, addNewUnitController} from "../../controllers/unitController.js";
const router = express.Router();

router.get("/getUnits", getUnitController);
router.post("/addNewUnit", addNewUnitController);

export default router;