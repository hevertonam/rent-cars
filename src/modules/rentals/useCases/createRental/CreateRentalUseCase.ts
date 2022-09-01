import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { IDateProvider } from "../../../../shared/conteiner/providers/DateProvider/IDateProvider";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalRepository } from "../../infra/typeorm/repositories/IRentalsRepository";



interface IRequest {
	user_id: string;
	car_id: string;
	expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {

	constructor(
		@inject("RentalsRepository ")
		private rentalsRepository: IRentalRepository,
		@inject("DayjsDateProvider")

		private dateProvider: IDateProvider,
		) { }

	async execute({
		user_id,
		car_id,
		expected_return_date,
	}: IRequest): Promise<Rental> {

		const minimumHour = 24;

		const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

		if (carUnavailable) {
			throw new AppError(" Car is unavailable");
		}

		const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
			user_id);

		if (rentalOpenToUser) {
			throw new AppError(" There's a rental in progress for user");
		}

		const expectedReturnDateFormat = this.dateProvider.convertToUTC(expected_return_date);


		const dateNow = this.dateProvider.dateNow();

		const compare = this.dateProvider.compareInHours(
			dateNow,
			expected_return_date,
			 );

		if(compare < minimumHour){
			throw new AppError("Invalid return time! ")
		}
		

		const rental = await this.rentalsRepository.create({
			user_id,
			car_id,
			expected_return_date,
		});

		return rental;
	}

}
export { CreateRentalUseCase }