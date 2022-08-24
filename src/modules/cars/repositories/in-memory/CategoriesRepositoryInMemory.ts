import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository{

    categories: Category[] = [];

    async findByName(nome: string): Promise<Category> {
        const category = this.categories.find((category) => category.nome === nome);
        return category;
    }

    async list(): Promise<Category[]> {
        const all = this.categories;
        return all; 
    }

    async create({ nome, descricao }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            nome, descricao
        });

        this.categories.push(category);
    }
}

export{CategoriesRepositoryInMemory}