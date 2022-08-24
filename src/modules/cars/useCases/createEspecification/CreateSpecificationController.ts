
import { Response, Request } from "express"; 
import { container} from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {

   async handle(request: Request, response: Response): Promise<Response>{
    
    const {nome, descricao}=request.body;

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase )
    
    await createSpecificationUseCase.execute({nome,descricao});

        return response.status(201).send(); 
    }
}


export {CreateSpecificationController};