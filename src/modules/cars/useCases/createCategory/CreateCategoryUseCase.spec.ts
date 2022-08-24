import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./ CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () =>{

beforeEach(() =>{
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
})

it("should be able to create a new category", async () =>{
    const category = {
        nome: "Category Test",
        descricao: "Category description test",
    }

   await createCategoryUseCase.execute({
        nome: category.nome,
        descricao: category.descricao,
    });
    
    const categoryCreated = await  categoriesRepositoryInMemory.findByName(
        category.nome
    );



    expect(categoryCreated).toHaveProperty("id");
});
 

it("should not be able to create a new category with name exists", async () =>{ 

    expect(async () =>{

    const category = {
        nome: "Category Test",
        descricao: "Category description test",
    }

   await createCategoryUseCase.execute({
        nome: category.nome,
        descricao: category.descricao,
    });

    await createCategoryUseCase.execute({
        nome: category.nome,
        descricao: category.descricao,
    });
    }).rejects.toBeInstanceOf(AppError);
    

});

})