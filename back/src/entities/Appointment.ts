

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

// import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
   
@Entity({
   name: "appointments"
})
class Appointment {
    @PrimaryGeneratedColumn()
    idAppointment!: number;
    
    @Column()
    userId!: number;

    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column({
      default: true,
    })
    statusActive!: boolean;
    
    @Column()
    servicio!: string;
   
    //TODO relacion
    @ManyToOne(() => User, user => user.appointments) // Relación muchos a uno
    user!: User;
}
   
export default Appointment
      