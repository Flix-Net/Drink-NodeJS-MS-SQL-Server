    import sql from "mssql";
    import config from "../config.js";
    import utils from "../data/utils.js";

    export const getEmployeesController = async (req, res)=>{
        try{
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Requests');

            const result = await request.query(sqlQueries.GetEmployees);

            res.status(200).json({
                success: true,
                message: "Сотрудники успешно загружены.",
                employees: result.recordset
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки сотрудников!",
                error: error.message,
            });
        }
    }

    export const getListEmployeesController = async (req, res)=>{
        try{
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Requests');

            const result = await request.query(sqlQueries.GetListEmployees);

            res.status(200).json({
                success: true,
                message: "Сотрудники успешно загружены.",
                employees: result.recordset
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка загрузки сотрудников!",
                error: error.message,
            });
        }
    }

    export const addNewEmployeeController = async (req, res) => {
        try {
            let data = req.body;
            console.log(data);
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("FIO", sql.NVarChar(50), data.FIO )
                .input("Position", sql.TinyInt, data.Position )
                .input("Salary", sql.Decimal(10, 2), data.Salary )
                .input("Address", sql.NVarChar(50), data.Address )
                .input("Phone", sql.NVarChar(50), data.Phone )
                .query(sqlQueries.SP_AddNewEmployee);

            res.status(200).json({
                success: true,
                message: "Сотрудник успешно добавлен!"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка создания сотрудника!",
                error: error.message,
            });
        }
    }

    export const editEmployeeController = async (req, res) => {
        try {
            let data = req.body;
            console.log(data);
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("EmployeeID", sql.TinyInt, data.EmployeeID )
                .input("FIO", sql.NVarChar(50), data.FIO )
                .input("Position", sql.TinyInt, data.Position )
                .input("Salary", sql.Decimal(10, 2), data.Salary )
                .input("Address", sql.NVarChar(50), data.Address )
                .input("Phone", sql.NVarChar(50), data.Phone )
                .query(sqlQueries.SP_EditEmployee);

            res.status(200).json({
                success: true,
                message: "Сотрудник успешно сохранен!"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка изменения сотрудника!",
                error: error.message,
            });
        }
    }

    export const deleteEmployeeController = async (req, res) => {
        try {
            let {id} = req.params;
            console.log(id);
            await sql.connect(config.sql);
            let request = new sql.Request();
            const sqlQueries = await utils('events/Stored_Procedures');

            const result = await request
                .input("EmployeeID", sql.TinyInt, id )
                .query(sqlQueries.SP_DeleteEmployee);

            res.status(200).json({
                success: true,
                message: "Сотрудник успешно удален!"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Ошибка удаления сотрудника!",
                error: error.message,
            });
        }
    }