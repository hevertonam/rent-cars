import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"
import {v4 as uuidv4} from 'uuid' ;

@Entity("specifications")
class Specification {

       @PrimaryColumn()
    id?: string;

       @Column()
        nome: string;

        @Column()
        descricao: string;

        @CreateDateColumn()
        data_criacao: Date;


       constructor(){
       if(!this.id){
              this.id = uuidv4();
       }
       }
      
}
export {Specification};