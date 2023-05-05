    import express  from 'express';
    import {
        AddFinishProductController, addNewEmployeeController,
        getHistoryPurchaseRawMatController,
         selectionDataByDateController
    } from '../controllers/eventsController.js';

    import {
        addNewComponentController,


    } from "../controllers/productController.js";


    const router = express.Router();

    //   ---------Products------------




    router.post('/addNewComponent', addNewComponentController);


    router.get("/getHistoryPurchaseRawMat", getHistoryPurchaseRawMatController);
    router.post('/selectionDataByDate', selectionDataByDateController);








    router.get("/getUnits", getUnitController);
    router.post("/addNewUnit", addNewUnitController);




    router.post("/addFinishProduct", AddFinishProductController);


    router.post("/addNewEmployee", addNewEmployeeController);


    export default router;