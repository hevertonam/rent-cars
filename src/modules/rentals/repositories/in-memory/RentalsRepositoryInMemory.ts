import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalRepository } from "../../infra/typeorm/repositories/IRentalsRepository";



	class RentalsRepositoryInMemory implements IRentalRepository {
	    rentals: Rental[] = [];

	    async findOpenRentalByCar(car_id: string): Promise<Rental> {
		return this.rentals.find(
		    (rental) => rental.car_id === car_id && rental.car_id && rental.end_date === null)
	    }

	    async findOpenRentalByUser(user_id: string): Promise<Rental> {
		return this.rentals.find(
		    (rental) => rental.user_id === user_id && rental.user_id && rental.end_date === null)
	    }

	}

	export { RentalsRepositoryInMemory }