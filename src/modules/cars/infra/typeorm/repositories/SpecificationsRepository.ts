
import { ICreateSpecificationDTO, ISpecificationsRepository } from "src/modules/cars/repositories/ISpecificationsRepository";
import { getRepository, Repository } from "typeorm";
import { Specification } from "../../../infra/typeorm/entities/Specification";




class SpecificationsRepository implements ISpecificationsRepository{
  
    private repository: Repository<Specification>;    

    constructor(){
        this.repository = getRepository(Specification)
    }
   

    
    async create({ nome, descricao }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            descricao,
            nome
        });
    await this.repository.save(specification);

    return specification; 
    };


    async findByName(nome: string):  Promise<Specification> {

        const specification = await this.repository.findOne({
            nome,
        });
        return specification;   
    };
  
    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids);
        return specifications;
    }

}

export {SpecificationsRepository}; 