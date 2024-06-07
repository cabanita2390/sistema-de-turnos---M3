

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
      default: "active",
    })
    status!: string;
    
    @Column()
    servicio!: string;
   
    //TODO relacion
    // //    Appointment  M:1 User
    // @ManyToOne(() => User,
    //   (user) => user.appointments
    // )
    // user!: User;
    @ManyToOne(() => User, user => user.appointments) // Relación muchos a uno
    user!: User;
}
   
export default Appointment
      