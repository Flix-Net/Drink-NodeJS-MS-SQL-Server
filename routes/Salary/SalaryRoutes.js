    import express  from 'express';
    import {
    cancelPaymentsController,
    getNewPaymentListController,
    getPaymentListController,
    getSalaryInfoController, PaymentSalarysController
    } from "../../controllers/salaryController.js";
    const router = express.Router();

    router.get("/getRecordSalary", getSalaryInfoController);
    router.get("/getPaymentList", getPaymentListController);
    router.post("/newPaymentList", getNewPaymentListController);
    router.delete("/cancelPayments", cancelPaymentsController);
    router.post("/paymentSalarys", PaymentSalarysController);

    export default router;