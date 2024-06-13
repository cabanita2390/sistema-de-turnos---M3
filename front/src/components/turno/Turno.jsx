/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./Turno.module.css"
import turn_image from "../../assets/oyher/turn_image.jpg"

export default function Turno({idAppointment, userId, date, time, servicio, statusActive, handleAppointmentCancel}) {

    //Formateamos fecha
    const date1 = new Date(date)
    const formatDate = `${date1.getDate()}/${date1.getMonth() + 1}/${date1.getFullYear()}`
    
    const handleClick = () =>{

        if (window.confirm(`Desea cancelar el turno del día ${formatDate} a las ${time}`)) {
            
            handleAppointmentCancel(idAppointment);
        }

    }

    
    return (
        <div className={styles.turnContainer}>
            <img src={turn_image} alt="" />
            <div  className={styles.turnInfoContainer}>
                <div className={styles.itemContainer}>
                    <p className={styles.itemInfoContainer}><span>Turno No: </span>{idAppointment}</p>
                </div>
                <div className={styles.itemInfoContainer}>
                    <p><span>Usuario: </span>{userId}</p>
                    <p><span>Fecha: </span>{formatDate}</p>
                    <p><span>Hora: </span>{time}</p>
                    <p><span>Servicio: </span>{servicio}</p>
                </div>
                <div className={styles.itemContainer}>
                    <p className={styles.itemInfoContainer}><span>Estado: </span>
                        {statusActive === true ? 
                        <span className={styles.active} onClick={handleClick}>Activo</span> : 
                        <span className={styles.cancelled}>Cancelado</span>
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
