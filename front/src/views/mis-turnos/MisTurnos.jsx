import { useState } from "react"
import misTurnos from "../../helpers/misTurnos"
import Turno from "../../components/turno/Turno";
import styles from "./MisTurnos.module.css"

export default function MisTurnos() {
    // eslint-disable-next-line no-unused-vars
    const [turnos, setTurnos] = useState(misTurnos)


    return (
        <>
        <h2>
            Mis turnos
        </h2>
            <ul>
                {
                    turnos.map((turno, index) => {
                        return (<Turno 
                            key={index}
                            idAppointment={turno.idAppointment}
                            userId={turno.userId}
                            date={turno.date}
                            time={turno.time}
                            servicio={turno.servicio}
                            statusActive={turno.statusActive == true ? 'Activo' : 'Cancelado'}
                        />)
                    })
                }
                
            </ul>
            </>
    )
}