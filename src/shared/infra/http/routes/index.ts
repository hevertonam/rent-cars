import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";
import { carsRoutes } from "./cars.routes";


const router = Router();

router.use("/modelo",categoriesRoutes); 

router.use("/modelo",specificationsRoutes); 

router.use("/users",usersRoutes); 

router.use("/cars",carsRoutes); 

router.use(authenticateRoutes); 

export{router};