
import { Response, Request } from "express";
import { container} from "tsyringe";
import { CreateCategoryUseCase } from "./ CreateCategoryUseCase";



class CreateCategoryController{

  async handle(request: Request, response: Response): Promise<Response>{
    const {nome, descricao} = request.body; 

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

      await  createCategoryUseCase.execute({nome,descricao});

        return response.status(201).send(); 
  }
}

export{CreateCategoryController} 