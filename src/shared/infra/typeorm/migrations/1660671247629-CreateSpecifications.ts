import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpecifications1660671247629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"specifications",
                columns:[
                    {
                        name: "id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type:"varchar"
                    },
                    {
                        name: "descricao",
                        type:"varchar"
                    },
                    {
                        name: "data_criacao",
                        type:"timestamp",
                        default:"now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("specifications")
    }

}
