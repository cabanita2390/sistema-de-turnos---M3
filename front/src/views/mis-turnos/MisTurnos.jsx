import { useEffect, useState } from "react";
import Turno from "../../components/turno/Turno";
import axios from "axios";
import styles from "./MisTurnos.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";

const GETAPPOINTMENTSURL = "http://localhost:3000/appointments";
const GET_USER_BY_ID_URL = `http://localhost:3000/users/`;
const PUT_CANCEL_APPOINTMENT = "http://localhost:3000/appointments/cancel/";

export default function MisTurnos() {
    // eslint-disable-next-line no-unused-vars

    //Traer el id del usurio
    const actualUserID = useSelector((state) => state.actualUser.userData.user.id);

    const navigate = useNavigate();
    const loggeado = useSelector((state) => state.actualUser.userData);
    //Traer el turno del estado global
    const appointmentsGlobal = useSelector((state) => state.actualUser.userAppointments);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loggeado.login) {
            navigate("/home");
        }
    }, [loggeado]);

    useEffect(() => {
        const fetchTurnos = async () => {
            try {
                const response = await axios.get(GET_USER_BY_ID_URL + `${actualUserID}`);
                const turns = response.data.appointments;

                dispatch(setUserAppointments(turns));
            } catch (error) {
                console.error("Error fetching turnos:", error);
            }
        };

        fetchTurnos();
    }, [actualUserID, dispatch]);

    const handleCreateTurn = () => {
        navigate("/appointments/schedule");
    };

    const handleAppointmentCancel = async (appId) => {
        try {
            await axios.put(PUT_CANCEL_APPOINTMENT + `${appId}`);
            const responseData = await axios.get(GET_USER_BY_ID_URL + `${actualUserID}`);
            dispatch(setUserAppointments(responseData.data.appointments));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h2>Mis turnos</h2>
            <hr />
            <ul>
                {appointmentsGlobal.map((turno) => {
                    return (
                        <Turno
                            key={turno.idAppointment}
                            idAppointment={turno.idAppointment}
                            userId={turno.userId}
                            date={turno.date}
                            time={turno.time}
                            servicio={turno.servicio}
                            statusActive={turno.statusActive} /* == true ? "Activo" : "Cancelado"  */
                            handleAppointmentCancel={handleAppointmentCancel}
                        />
                    );
                })}
            </ul>
            <Button text="Solicitar nuevo turno" onClick={handleCreateTurn}></Button>
        </>
    );
}
