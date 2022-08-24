import {  Router } from "express";
import { CreateCarController } from "../../../../../src/modules/cars/useCases/CreateCar/CreateCarController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {enruseAdmin} from "../middlewares/enruseAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
    "/", 
    ensureAuthenticated,  
    enruseAdmin,
    createCarController.handle
    );

export {carsRoutes};

