
import { ICreateSpecificationDTO, ISpecificationsRepository } from "src/modules/cars/repositories/ISpecificationsRepository";
import { getRepository, Repository } from "typeorm";
import { Specification } from "../../../infra/typeorm/entities/Specification";




class SpecificationsRepository implements ISpecificationsRepository{
  
    private repository: Repository<Specification>;    

    constructor(){
        this.repository = getRepository(Specification)
    }

    
    async create({ nome, descricao }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            descricao,
            nome
        });
    await this.repository.save(specification);
    };


    async findByName(nome: string):  Promise<Specification> {

        const specification = this.repository.findOne({
            nome,
        });
        return specification;   
    };
  

}

export {SpecificationsRepository}; 