    import express from 'express';
    const router = express.Router();


    import productRoutes from './Products/ProductsRoutes.js';
    import unitsRoutes from "./Units/UnitsRoutes.js";
    import rawMaterialsRoutes from "./RawMaterials/RawMaterialsRoutes.js";
    import componentRoutes from "./Components/ComponentRoutes.js";

    router.use("/products", productRoutes);
    router.use("/units", unitsRoutes);
    router.use("/RawMaterial", rawMaterialsRoutes);
    router.use("/Components", componentRoutes);


    export default router;