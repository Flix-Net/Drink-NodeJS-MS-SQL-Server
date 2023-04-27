    import express from 'express';
    const router = express.Router();


    import productRoutes from './Products/ProductsRoutes.js';
    import unitsRoutes from "./Units/UnitsRoutes.js";
    import rawMaterialsRoutes from "./RawMaterials/RawMaterialsRoutes.js";
    import componentRoutes from "./Components/ComponentRoutes.js";
    import budgetRoutes from "./Balance/BalanceRoutes.js"
    import employeeRoutes from "./Employees/EmployeesRoutes.js";
    import positionsRoutes from "./Positions/PositionRoutes.js";

    router.use("/products", productRoutes);
    router.use("/units", unitsRoutes);
    router.use("/RawMaterial", rawMaterialsRoutes);
    router.use("/Components", componentRoutes);
    router.use("/Budget", budgetRoutes);
    router.use("/Employee", employeeRoutes);
    router.use("/Position", positionsRoutes);


    export default router;