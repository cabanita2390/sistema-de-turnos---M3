/*
   Relaciones
 
   User         1:1 Credential
   Credential   1:1 User

   User         1:M Appointment
   Appointment  M:1 User
 */

import { Column, Entity, JoinColumn, OneToMany, OneToOne,  PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({
    name: "users"
})
class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    birthdate!: string;

    @Column()
    nDni!: number;

    //TODO Relaciones
    // User         1:1 Credential

    @OneToOne(() => Credential)
    @JoinColumn({ name: "idCredential" })
    credential!: Credential

    // User         1:M Appointment
    @OneToMany(
        () => Appointment,
        (appointment) => appointment.userId
    )
    appointments!: Appointment[]
}

export default User





