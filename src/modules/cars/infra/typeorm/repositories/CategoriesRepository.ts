import { getRepository, Repository } from "typeorm";
import {Category} from "../entities/Category";
import { ICategoriesRepository,ICreateCategoryDTO } from "../../../repositories/ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository{
    private repository:Repository<Category>;
 
constructor(){
    this.repository = getRepository(Category);
}

async create({nome,descricao}:ICreateCategoryDTO) : Promise<void>
    {

    const category = this.repository.create({
        
        descricao,
        nome,
    }); 

    await this.repository.save(category);
}

async list(): Promise<Category[]>   {
const categories = await this.repository.find();
return categories; 
}


async findByName(nome: string):  Promise<Category>{

    const category = await this.repository.findOne({ nome });
    return category;
}
}




export {CategoriesRepository};