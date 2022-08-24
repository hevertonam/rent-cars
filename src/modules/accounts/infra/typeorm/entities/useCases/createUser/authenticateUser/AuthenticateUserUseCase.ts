import {compare} from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

import{sign} from "jsonwebtoken";
import { AppError } from "../../../../../../../../shared/errors/AppError";


interface IRequest{
email: string;
password:string;
}

interface IResponse{  
    user:{
        name:string;
        email:string
    },
    token:string;
}

@injectable()
class AuthenticateUserUseCase{
    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

async execute({email, password}:IRequest): Promise<IResponse>{
    //Verifica se usuario existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user){
        throw new AppError ("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
        throw new AppError ("Email or password incorrect!");
    }

    //chave pc
    const token = sign({},"bc54f4d60f1cec0f9a6cb70e13f2127a", {
    subject: user.id,
    expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
        token,
        user:{
            name:user.name,
            email:user.email
        }
    }

    return tokenReturn;

    //Verifica se senha esta correta




    //Gerar o jsonwebtoken
}

}

export {AuthenticateUserUseCase}