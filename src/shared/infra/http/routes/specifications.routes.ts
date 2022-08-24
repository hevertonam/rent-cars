 import { Router } from 'express';
import { CreateSpecificationController } from '../../../../modules/cars/useCases/createEspecification/CreateSpecificationController';
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {enruseAdmin} from "../middlewares/enruseAdmin";

 const specificationsRoutes = Router();

 const createSpecificationController = new CreateSpecificationController();

 
 specificationsRoutes.post(
    "/specification", ensureAuthenticated,  
    enruseAdmin, createSpecificationController.handle);


    specificationsRoutes.post(
      "/specification", ensureAuthenticated,  
      enruseAdmin, createSpecificationController.handle);
 export{specificationsRoutes};
