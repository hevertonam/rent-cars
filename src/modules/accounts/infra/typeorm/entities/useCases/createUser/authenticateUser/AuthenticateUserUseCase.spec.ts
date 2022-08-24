import { ICreateUserDTO } from "src/modules/dtos/ICreateUserDTO";
import { AppError } from "../../../../../../../../shared/errors/AppError";
import { UsersRepositoryinMemory } from "../../../repositories/in-memory/UsersRepositoryinMemory";
import { CreateUserUseCase } from "../CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";



let authenticateUserUseCase: AuthenticateUserUseCase;  
let usersRepositoryinMemory: UsersRepositoryinMemory;
let createUserUseCase : CreateUserUseCase;

describe("Authenticate user", () => {
    beforeEach (() =>{
        usersRepositoryinMemory = new UsersRepositoryinMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryinMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryinMemory);

    });

   it("shold be able to authenticate an user", async () =>{
    const user: ICreateUserDTO = {
        driver_license: "000123",
        email: "user@test.com",
        password:"1234",
        name: "user test",
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
        email: user.email,
        password: user.password,
    });

   expect(result).toHaveProperty("token");
   });

   it("should not be able to authenticate an noneexistent user",() =>{
    expect(async() => {
        await authenticateUserUseCase.execute({
            email: "user.email.com",
            password: "1234",
        });
    }).rejects.toBeInstanceOf(AppError);
   });

   it("shoul not be able to authenticate with incorrect password", () => {
    expect (async() => {
        const user: ICreateUserDTO = {
            driver_license: "9999",
            email: "user@user.com",
            password: "1234",
            name:"User Test Error"
        }
         
        await createUserUseCase.execute(user);

        await authenticateUserUseCase.execute({
            email: user.email,
            password:"incorrectPassword",
        });
    }).rejects.toBeInstanceOf(AppError);
   })
});