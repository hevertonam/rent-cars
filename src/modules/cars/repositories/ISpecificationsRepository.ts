import { Specification } from "../infra/typeorm/entities/Specification";



interface ICreateSpecificationDTO{
    nome: string;
    descricao: string;
}

interface ISpecificationsRepository{

    create({nome, descricao}:ICreateSpecificationDTO): Promise<Specification>;
    findByName(nome:string): Promise<Specification>;
    findByIds(ids:string[]): Promise<Specification[]>;

    
 }

 export {ISpecificationsRepository,ICreateSpecificationDTO}; 