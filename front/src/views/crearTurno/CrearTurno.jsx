import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const POST_APPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

export default function CrearTurno(props) {
    //HOOKS Y ESTADOS GLOBALES
    const navigate = useNavigate();
    const userId = useSelector((state) => state.actualUser?.userData.user.id);

    //REDIRIGIMOS A "/" SI NO HAY USUARIO LOGEADO
    useEffect(() => {
        if (!userId) {
            navigate("/");
        }
    }, [userId, navigate]);

    //ESTADOS LOCALES
    const initialState = {
        servicio: "",
        date: "",
        time: "",
    };

    const [appointment, setAppointment] = useState(initialState);
    const [errors, setErrors] = useState({
        date: "Debe ingresar una fecha",
    });

    //VALIDACION
    const validateAppointment = ({ date, time, servicio }) => {
        const errors = {};

        if (!date) {
            errors.date = "Ingresar fecha";
        } else if (isWeekend(date)) {
            errors.date = "La fecha seleccionada es fin de semana";
        }

        if (!time) {
            errors.time = "Ingresar la hora de la cita";
        }

        if (!servicio) {
            errors.servicio = "Ingresar el servicio";
        }

        return errors;
    };

    const isWeekend = (date) => {
        const day = new Date(date).getDay();
        return day === 0 || day === 6; // 0:domingo 6:sábado
    };

    //HANDLERS
    const handleChange = (event) => {
        const { value, name } = event.target;
        const updatedAppointment = {
            ...appointment,
            [name]: value,
        };
        setAppointment(updatedAppointment);
        setErrors(validateAppointment(updatedAppointment));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newAppointment = {
            date: appointment.date,
            time: appointment.time,
            servicio: appointment.servicio,
            usuarioId: userId,
        };

        try {
            const { data } = await axios.post(POST_APPOINTMENT_URL, newAppointment);
            alert("Ha sido creado el turno");
            setAppointment(initialState);
            navigate("/appointments");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <h2>Nuevo turno</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Fecha: </label>
                    <input type="date" id="date" name="date" value={appointment.date} onChange={handleChange} />
                    {errors.date && <span>{errors.date}</span>}
                </div>

                <div>
                    <label htmlFor="time">Hora: </label>
                    <select id="time" name="time" value={appointment.time} onChange={handleChange}>
                        <option value="">Seleccionar hora</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                    </select>
                    {errors.time && <span>{errors.time}</span>}
                </div>
                <br />

                <div>
                    <label htmlFor="servicio">Servicio: </label>
                    <input
                        type="text"
                        id="servicio"
                        name="servicio"
                        value={appointment.servicio}
                        placeholder="Ingresa servicio"
                        onChange={handleChange}
                    />
                    {errors.servicio && <span style={{ color: "red" }}>{errors.servicio}</span>}
                </div>

                <button type="submit" disabled={Object.keys(errors).length > 0}>
                    Enviar
                </button>
            </form>
        </div>
    );
}
