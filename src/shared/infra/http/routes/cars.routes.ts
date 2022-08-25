import {  Router } from "express";
import { CreateCarController } from "../../../../../src/modules/cars/useCases/CreateCar/CreateCarController";


import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {enruseAdmin} from "../middlewares/enruseAdmin";
import { ListAvailableCarsController } from "../../../../../src/modules/cars/useCases/listAvailableCars/ListAvailableCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController;

carsRoutes.post(
    "/", 
    ensureAuthenticated,  
    enruseAdmin,
    createCarController.handle
    );

carsRoutes.get("/available", listAvailableCarsController.handle);

export {carsRoutes};

