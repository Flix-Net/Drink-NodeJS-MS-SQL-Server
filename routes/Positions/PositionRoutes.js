    import express from "express";
    import {
        addNewPositionController,
        deletePositionController,
        getPositionsController
    } from "../../controllers/positionController.js";


    const router = express.Router();

    router.get("/getAllPositions", getPositionsController);
    router.post("/addNewPosition", addNewPositionController);
    router.delete("/deletePosition/:id", deletePositionController);

    export default router;