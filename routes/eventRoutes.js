import express  from 'express';
import {
    AddFinishProductController, addNewEmployeeController, addNewUnitController,
    getBalanceController, getComponentsByIDController, getCountMaterialFromWarehouseController,
    getEmployeesController, getHistoryPurchaseRawMatController, getPositionsController, getUnitController,
    purchaseRawMaterialController, selectionDataByDateController
} from '../controllers/eventsController.js';

import {
    addNewComponentController,
    addNewProductController,
    getAllProductsController, getHistoryProductionProductsController, getHistorySaleProductsController,
    productionProductController, saleProductController
} from "../controllers/productController.js";
import {
    addNewRawMaterialController,
    getRawMaterialController
} from "../controllers/rawMaterialController.js";

const router = express.Router();

router.post('/addNewProduct', addNewProductController);
router.get('/getAllProducts', getAllProductsController);
router.post('/productionProduct', productionProductController);
router.post('/saleProduct', saleProductController);
router.post('/addNewComponent', addNewComponentController);

router.get('/getHistorySaleProducts', getHistorySaleProductsController);
router.get('/getHistoryProductionProducts', getHistoryProductionProductsController);
router.get("/getHistoryPurchaseRawMat", getHistoryPurchaseRawMatController);
router.post('/selectionDataByDate', selectionDataByDateController);

router.post("/addNewRawMaterial", addNewRawMaterialController)
router.get('/getRawMaterials', getRawMaterialController);

router.get('/getMyBalance', getBalanceController);
router.get('/getEmployees', getEmployeesController);

router.post('/PurchaseRawMaterial', purchaseRawMaterialController);

router.get("/getUnits", getUnitController);
router.post("/addNewUnit", addNewUnitController);


router.post("/getComponentsByID", getComponentsByIDController);
router.post("/getCountCompFromWarehouse", getCountMaterialFromWarehouseController);

router.post("/addFinishProduct", AddFinishProductController);

router.get("/getAllPositions", getPositionsController);
router.post("/addNewEmployee", addNewEmployeeController);


export default router;