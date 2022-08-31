import dayjs from "dayjs";



import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { AppError } from "../../../../shared/errors/AppError";

	let createRentalUseCase: CreateRentalUseCase;
	let rentalsRepositoryInMemory : RentalsRepositoryInMemory

	describe("Create Rental", () => {
		const dayAdd24hours = dayjs().add(1, "day").toDate();

	    beforeEach(() =>{
		rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
		createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
	    });

	    it ("should be able to create a new rental", async() => {
		  
		const rental = await createRentalUseCase.execute({
		    user_id: "12345",
		    car_id: "121212",
		    expected_return_date: dayAdd24hours,
		});
		
	

		 expect(rental).toHaveProperty("id");
		 expect(rental).toHaveProperty("start_date");
	    });


		it ("should not be able to create a new rental if there is another open to same user", async() => {
		   
			expect(async() => {
				await createRentalUseCase.execute({
					user_id: "12345",
					car_id: "121212",
					expected_return_date: dayAdd24hours,
				});
					
				await createRentalUseCase.execute({
					user_id: "12345",
					car_id: "test",
					expected_return_date: dayAdd24hours,
				});

			}).rejects.toBeInstanceOf(AppError);
	 
			});
			
		it ("should not be able to create a new rental if there is another open to same user", async() => {
		
			expect(async() => {
				await createRentalUseCase.execute({
					user_id: "123",
					car_id: "test",
					expected_return_date: dayAdd24hours,
				});
				
			await createRentalUseCase.execute({
					user_id: "321",
					car_id: "121212",
					expected_return_date: dayAdd24hours,  
				});

			}).rejects.toBeInstanceOf(AppError);
		
			});
			
		it ("should not be able to create a new rental with invalid return time ", async() => {
			expect(async() => {
				await createRentalUseCase.execute({
					user_id: "123",
					car_id: "test",
					expected_return_date: dayjs().toDate(),
				});
			}).rejects.toBeInstanceOf(AppError);
		
			});

		
	})


