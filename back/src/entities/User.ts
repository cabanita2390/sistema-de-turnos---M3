import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
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

    @OneToOne(() => Credential) // eager: true para cargar la relación automáticamente
    @JoinColumn({ name: "credentialId" })
    credential!: Credential;

    @OneToMany(() => Appointment, appointment => appointment.user) // Cambiado a `appointment.user`
    appointments!: Appointment[];
}

export default User;
