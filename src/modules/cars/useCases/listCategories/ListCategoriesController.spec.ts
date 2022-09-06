
  import { hash } from "bcrypt";
  import { v4 as uuidV4 } from "uuid";
  import { Connection} from "typeorm";
  import request from "supertest";
  import createConection from "../../../../shared/infra/typeorm";
  // import createConnection from "../../../../shared/infra/typeorm";
  import { app } from "../../../../shared/infra/http/app";
  
let connection: Connection;

describe("Create Category Controller", () => {
  beforeAll(async () => {
    connection = await createConection();

    await connection.runMigrations();

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license ) 
      values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')
    `
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able  to list all categories", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;

     await request(app)
      .post("/modelo")
      .send({
        "nome": "Category SuperTest",
        "descricao": "Category SuperTest",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });


      const response = await request(app).get("/modelo");

   

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].nome).toEqual("Category SuperTest");
  });

  
 
});