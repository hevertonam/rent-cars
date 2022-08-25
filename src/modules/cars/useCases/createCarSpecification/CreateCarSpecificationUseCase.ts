import { AppError } from "../../../..//shared/errors/AppError";
import { inject } from "tsyringe";
import { ICarsRepository } from "../../repositories/in-memory/ICarsRepository";

interface IRequest{
    car_id: string;
    specifications_id: string[];
}


class CreateCarSpecificationUseCase{

    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute({ car_id,  specification_id}): Promise<void> {
         
    const carExists = await this.carsRepository.findById(car_id);
    if(!carExists){
        throw new AppError("Car does not exists!"); 
    } 
    }
}

export{CreateCarSpecificationUseCase}