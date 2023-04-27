import {
    addNewEmployeeController, deleteEmployeeController,
    editEmployeeController,
    getEmployeesController, getListEmployeesController
} from "../../controllers/employeeController.js";
import express from "express";

const router = express.Router();

router.get('/getEmployees', getEmployeesController);
router.get('/getListEmployees', getListEmployeesController);
router.post('/addNewEmployee', addNewEmployeeController);
router.put('/editEmployee', editEmployeeController);
router.delete('/deleteEmployee/:id', deleteEmployeeController);

export default router;