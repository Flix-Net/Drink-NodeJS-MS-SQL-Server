    import {
    addNewEmployeeController,
    deleteEmployeeController,
    editEmployeeController,
    getEmployeesController,
    getInfoEmployeeController,
    getListEmployeesController,
    upCountProdEmpController,
        updateSalaryController
} from "../../controllers/employeeController.js";
    import express from "express";

    const router = express.Router();

    router.get('/getEmployees', getEmployeesController);
    router.get('/getListEmployees', getListEmployeesController);
    router.get('/getInfoEmployee', getInfoEmployeeController);
    router.post('/addNewEmployee', addNewEmployeeController);
    router.put('/editEmployee', editEmployeeController);
    router.delete('/deleteEmployee/:id', deleteEmployeeController);
    router.post('/upCountProdEmpController', upCountProdEmpController);
    router.post('/updateSalary', updateSalaryController);

    export default router;