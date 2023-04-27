
import express from "express";
import {getPositionsController} from "../../controllers/positionController.js";


const router = express.Router();

router.get("/getAllPositions", getPositionsController);

export default router;