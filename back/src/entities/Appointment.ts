/*
   Relaciones
 
   User         1:1 Credential
   Credential   1:1 User

   User         1:M Appointment
   Appointment  M:1 User
 */

import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

// import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
   
@Entity({
   name: "appointments"
})
class Appointment {
    @PrimaryGeneratedColumn()
    idTurns!: number;

    //usuarioId

    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column()
    userId!: string;

    @Column({
      default: "active",
    })
    status!: string;
    
    @Column()
    servicio!: string;
   
    //TODO relacion
    //    Appointment  M:1 User

    //!DECLARAMOS EN TABLA PRINCIPAL: User


    //    User         1:M Appointment
}
   
export default Appointment
      