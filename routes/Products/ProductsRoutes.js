import express  from 'express';
import {
    addNewProductController,
    deleteProductController,
    editProductController,
    getAllProductsController, getHistoryProductionProductsController,
    getHistorySaleProductsController,
    productionProductController,
    saleProductController
} from "../../controllers/productController.js";

const router = express.Router();

router.post('/addNewProduct', addNewProductController);
router.put('/editProduct', editProductController);
router.delete('/deleteProduct/:id', deleteProductController);

router.get('/getAllProducts', getAllProductsController);
router.post('/productionProduct', productionProductController);
router.post('/saleProduct', saleProductController);

router.get('/getHistorySaleProducts', getHistorySaleProductsController);
router.get('/getHistoryProductionProducts', getHistoryProductionProductsController);

export default router;