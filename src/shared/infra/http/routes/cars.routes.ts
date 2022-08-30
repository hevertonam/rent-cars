import {  Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";

import { CreateCarController } from "../../../../../src/modules/cars/useCases/CreateCar/CreateCarController";
import { CreateCarSpecificationController } from "../../../../../src/modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "../../../../../src/modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "../../../../../src/modules/cars/useCases/uploadCarImage/UploadCarImagesController";


import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {enruseAdmin} from "../middlewares/enruseAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController;
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

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

carsRoutes.post("/images/:id", 
ensureAuthenticated,  
enruseAdmin, 
upload.array("images"),
uploadCarImagesController.handle)

export {carsRoutes};

