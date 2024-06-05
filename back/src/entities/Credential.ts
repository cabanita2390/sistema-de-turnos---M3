/*
   Relaciones
 
   User         1:1 Credential
   Credential   1:1 User

   User         1:M Appointment
   Appointment  M:1 User
 */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials"
})
class Credential {
    @PrimaryGeneratedColumn()
    idCredential!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    //TODO relacion
    // Credential   1:1 User
    //!DECLARAMOS EN TABLA PRINCIPAL: User
}

export default Credential
   