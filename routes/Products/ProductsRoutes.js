    import express  from 'express';
    import {
        addFinishProductController,
        addNewProductController,
        checkComponentAvailabilityController,
        deleteProductController,
        editProductController,
        getAllProductsController,
        getHistoryProductionProductsController,
        getHistorySaleProductsController,
        productionProductController,
        saleProductController
    } from "../../controllers/productController.js";

    const router = express.Router();

    router.post('/addNewProduct', addNewProductController);
    router.put('/editProduct', editProductController);
    router.delete('/deleteProduct/:id', deleteProductController);

    router.get('/getAllProducts', getAllProductsController);
    router.post('/checkComponentAvailability', checkComponentAvailabilityController);
    router.post("/addFinishProduct", addFinishProductController);
    router.post('/productionProduct', productionProductController);
    router.post('/saleProduct', saleProductController);

    router.post('/getHistorySaleProducts', getHistorySaleProductsController);
    router.post('/getHistoryProductionProducts', getHistoryProductionProductsController);

    export default router;