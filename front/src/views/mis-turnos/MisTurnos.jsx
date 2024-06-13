import { useEffect, useState } from "react";
import Turno from "../../components/turno/Turno";
import axios from "axios";
import styles from "./MisTurnos.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const GETAPPOINTMENTSURL = "http://localhost:3000/appointments";

export default function MisTurnos() {
    // eslint-disable-next-line no-unused-vars
    const [turnos, setTurnos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTurnos = async () => {
            try {
                const response = await axios.get(GETAPPOINTMENTSURL);
                //const response = await axios.post(GETAPPOINTMENTSURL + "/1");   !!Si fuera por params + "/id"
                console.log(response.data); // Mostrar los datos en la consola
                setTurnos(response.data);
            } catch (error) {
                console.error("Error fetching turnos:", error);
            }
        };

        fetchTurnos();
    }, []);

    const handleCreateTurn = () => {
        navigate('/appointments/schedule')
    };

    return (
        <>
            <h2>Mis turnos</h2>
            <hr />
            <ul>
                {turnos.map((turno) => {
                    return (
                        <Turno
                            key={turno.idAppointment}
                            idAppointment={turno.idAppointment}
                            userId={turno.userId}
                            date={turno.date}
                            time={turno.time}
                            servicio={turno.servicio}
                            statusActive={turno.statusActive} /* == true ? "Activo" : "Cancelado"  */
                        />
                    );
                })}
            </ul>
            <Button text="Solicitar nuevo turno" onClick={handleCreateTurn}></Button>
        </>
    );
}
