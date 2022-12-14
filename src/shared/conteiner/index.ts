import {container} from "tsyringe";

// import "../../shared/conteiner/providers";


import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/infra/typeorm/entities/repositories/IUsersRepository";

import {ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository"
import {CategoriesRepository} from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository"
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";

import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { ICarsImagesRepository } from "../../modules/cars/repositories/ICarsImagesRepository";
import { CarsImagesRepository } from "../../modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { IRentalRepository } from "../../modules/rentals/infra/typeorm/repositories/IRentalsRepository";
import { RentalsRepository } from "../../modules/rentals/repositories/RentalsRepository";




container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
);

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository",
    CarsImagesRepository
);

container.registerSingleton<IRentalRepository>(
    "RentalsRepository",
    RentalsRepository
);
