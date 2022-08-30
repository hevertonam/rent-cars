import { Specification } from "../../infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";



class SpecificationRepositoryInMemory implements ISpecificationsRepository{
    specifications: Specification[] = [];

    async create({ nome, descricao 
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();
        
        Object.assign(specification, {
            descricao,
            nome,
        });
        this.specifications.push(specification);

        return specification;

    }
    async findByName(nome: string): Promise<Specification> {
        return this.specifications.find(
            (specification) => specification.nome === nome
        );
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter(specification => 
            ids.includes(specification.id)
            
            );
            return allSpecifications;
    }

}

export {SpecificationRepositoryInMemory};