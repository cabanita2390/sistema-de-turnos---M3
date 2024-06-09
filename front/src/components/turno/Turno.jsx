/* eslint-disable react/prop-types */
import styles from "./Turno.module.css"
import turn_image from "../../assets/oyher/turn_image.jpg"

export default function Turno({idAppointment, userId, date, time, servicio, statusActive}) {

    return (
        <div className={styles.turnContainer}>
            <img src={turn_image} alt="" />
            <div  className={styles.turnInfoContainer}>
                <p><span>Turno No: </span>{idAppointment}</p>
                <div>
                    <p><span>Usuario: </span>{userId}</p>
                    <p><span>Fecha: </span>{date}</p>
                    <p><span>Hora: </span>{time}</p>
                    <p><span>Servicio: </span>{servicio}</p>
                </div>
                <p><span>Estado: </span>{statusActive}</p>
            </div>
        </div>
    )
}
