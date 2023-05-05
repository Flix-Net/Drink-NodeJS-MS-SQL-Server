import express  from 'express';
import {getUnitController, addNewUnitController, deleteUnitController} from "../../controllers/unitController.js";
const router = express.Router();

router.get("/getUnits", getUnitController);
router.post("/addNewUnit", addNewUnitController);
router.delete("/deleteUnit/:id", deleteUnitController);

export default router;