import {  Router } from "express";
import { CreateCarController } from "../../../../../src/modules/cars/useCases/CreateCar/CreateCarController";
import { CreateCarSpecificationController } from "../../../../../src/modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "../../../../../src/modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {enruseAdmin} from "../middlewares/enruseAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController;
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
    "/", 
    ensureAuthenticated,  
    enruseAdmin,
    createCarController.handle
    );

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post("/specifications/:id",
ensureAuthenticated,  
enruseAdmin, 
createCarSpecificationController.handle);
export {carsRoutes};

