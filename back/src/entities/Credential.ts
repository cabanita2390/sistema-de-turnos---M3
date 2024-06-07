
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
    //Lo declaramos en el modelo principal: USER
}

export default Credential
   