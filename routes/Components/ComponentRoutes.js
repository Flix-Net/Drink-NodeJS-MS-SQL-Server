    import express  from 'express';


    import {
        addNewComponentInProductController, deleteComponentFromProductController, editConfigComponentController,
        getComponentsByIDController,
        getCountMaterialFromWarehouseController
    } from "../../controllers/componentController.js";

    const router = express.Router();

    router.post("/getComponentsByID", getComponentsByIDController);
    router.post("/getCountCompFromWarehouse", getCountMaterialFromWarehouseController);

    router.post('/addComponent', addNewComponentInProductController);
    router.put('/editConfigComp', editConfigComponentController);
    router.delete('/deleteComponent/:productID/:rawMaterialID', deleteComponentFromProductController);

    export default router;