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

    @OneToOne(() => Credential)
    @JoinColumn({name: "credentialId"})
    credential!: Credential;

    // User         1:M Appointment

    @OneToMany(() => Appointment,
        (appointment) => appointment.userId
    )
    appointments!: Appointment[];


}

export default User