import express  from 'express';
import {getBalanceController} from "../../controllers/budgetController.js";


const router = express.Router();

router.get('/getMyBalance', getBalanceController);

export default router;