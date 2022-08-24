import { Specification } from "../infra/typeorm/entities/Specification";



interface ICreateSpecificationDTO{
    nome: string;
    descricao: string;
}

interface ISpecificationsRepository{

    create({nome, descricao}:ICreateSpecificationDTO): Promise<void>;
    findByName(nome:string): Promise<Specification>;
    
 }

 export {ISpecificationsRepository,ICreateSpecificationDTO}; 