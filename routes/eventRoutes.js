    import express  from 'express';
    import {
        AddFinishProductController, addNewEmployeeController, addNewUnitController,
        getBalanceController,
        getEmployeesController, getHistoryPurchaseRawMatController, getPositionsController,
        purchaseRawMaterialController, selectionDataByDateController
    } from '../controllers/eventsController.js';

    import {
        addNewComponentController,


    } from "../controllers/productController.js";


    const router = express.Router();

    //   ---------Products------------




    router.post('/addNewComponent', addNewComponentController);


    router.get("/getHistoryPurchaseRawMat", getHistoryPurchaseRawMatController);
    router.post('/selectionDataByDate', selectionDataByDateController);



    router.get('/getMyBalance', getBalanceController);
    router.get('/getEmployees', getEmployeesController);

    router.post('/PurchaseRawMaterial', purchaseRawMaterialController);

    router.get("/getUnits", getUnitController);
    router.post("/addNewUnit", addNewUnitController);




    router.post("/addFinishProduct", AddFinishProductController);

    router.get("/getAllPositions", getPositionsController);
    router.post("/addNewEmployee", addNewEmployeeController);


    export default router;