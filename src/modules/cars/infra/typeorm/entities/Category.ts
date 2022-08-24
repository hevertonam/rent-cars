import {v4 as uuidv4} from 'uuid' 
import{Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("categories")
 class Category
  {
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

 export  {Category};