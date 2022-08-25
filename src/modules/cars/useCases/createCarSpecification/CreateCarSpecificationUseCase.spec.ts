


import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory";



let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;
describe("Create Car Specification", () => {


    beforeEach (() =>{
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationsRepositoryInMemory = new SpecificationRepositoryInMemory();

        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
        carsRepositoryInMemory, 
        specificationsRepositoryInMemory);
    });

    it ("should not be abel to add a new specification to a now-existent car", async() => {
       expect (async() =>{
        const car_id = "1234";
        const specifications_id = ["54321"];

        await createCarSpecificationUseCase.execute({
            car_id, 
            specifications_id, 
            
            
        });
       }).rejects.toBeInstanceOf(AppError); 
    });

    it ("should be abel to add a new specification to the car", async() => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car",
        description: "Description Car", 
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60, 
        brand: "Brand", 
        category_id: "category",
        });

        const specification_id = [54321];

        await createCarSpecificationUseCase.execute({
            car_id: car.id, 
            specification_id });
    })

})