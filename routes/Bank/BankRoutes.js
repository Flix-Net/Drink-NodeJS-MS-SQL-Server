    import express  from 'express';
    import {getRecordsController, PaymentController, TakeCreditController} from "../../controllers/bankController.js";

    const router = express.Router();

    router.get('/getRecords', getRecordsController);
    router.post('/payment', PaymentController);
    router.post('/credit', TakeCreditController);

    export default router;