import express  from 'express';


import {
    addNewComponentController, deleteComponentFromProductController, editConfigComponentController,
    getComponentsByIDController,
    getCountMaterialFromWarehouseController
} from "../../controllers/componentController.js";

const router = express.Router();

router.post("/getComponentsByID", getComponentsByIDController);
router.post("/getCountCompFromWarehouse", getCountMaterialFromWarehouseController);

router.post('/addComponent', addNewComponentController);
router.put('/editConfigComp', editConfigComponentController);
router.delete('/deleteComponent/:productID/:rawMaterialID', deleteComponentFromProductController);

export default router;