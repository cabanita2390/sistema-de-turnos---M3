import axios from "axios";
import React, { useState } from "react";

const emailRegExp = /\S+@\S+\.\S+/;
const POST_USER_URL = "http://localhost:3000/users/register";

function Register() {
    //*ESTADO INICIAL
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    };

    //*ESTADOS
    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    //*VALIDACIONES
    const validateUser = ({ name, email, birthdate, nDni, username, password, confirmpassword }) => {
        const errors = {};

        if (!name) errors.name = "Debe ingresar un nombre";
        if (!email) errors.email = "Debe ingresar un email";
        else if (!emailRegExp.test(email)) "Email inválido";
        if (!birthdate) errors.birthdate = "Debe ingresar un birthdate";
        if (!nDni) errors.nDni = "Debe ingresar un nDni";
        if (!username) errors.username = "Debe ingresar un username";
        if (!password) errors.password = "Debe ingresar un password";
        if (confirmpassword !== password) errors.confirmpassword = "Las contraseñas no coinciden";

        return errors;
    };

    //*HANDLERS
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });

        setErrors(validateUser({
            ...user,
            [name]: value,
        }))
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        //BBDD
        const userData = {
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            nDni: user.nDni,
            username: user.username,
            password: user.password,
        }
        //Lo pusheamos

        axios.post(POST_USER_URL, userData)
        .then(({data})=> {
            console.log({data});
            console.log({userData})
            setUser(initialState)
        })
        .catch(error => alert(error.message))
    }

    const handleBorrar = (event) => {
        event.preventDefault();
        setUser(initialState)
    }

    //*FUNCIONES
    const formData = [
        { label: "Nombre ", name: "name", type: "text" },
        { label: "Username ", name: "username", type: "text" },
        { label: "Password ", name: "password", type: "password" },
        { label: "Confirm password ", name: "confirmpassword", type: "password" },
        { label: "Email ", name: "email", type: "text" },
        { label: "Fecha de nacimiento ", name: "birthdate", type: "date" },
        { label: "Número de identificacion ", name: "nDni", type: "text" },
    ];

    return (
        <div>
            <h2>Registro</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                {formData.map(({ label, name, type }) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={name}>
                        <label style={{color:"white"}}>{label}</label>
                        <input
                            type={type}
                            name={name}
                            id={name}
                            value={user[name]}
                            placeholder={`Ingresar ${label.toLowerCase()}`}
                            onChange={handleChange}
                        />
                        {errors[name] && <span style={{ color: "red" }}>{errors[name]}</span>}
                    </div>
                ))}
                <button 
                type="submit" 
                disabled={Object.keys(user).some(e => !user[e]) ||
                Object.keys(errors).some(elem => errors[elem])}
                >Registrar</button>
                <button onClick={handleBorrar}> Borrar formulario</button>
            </form>
        </div>
    );
}

export default Register;

//Datos
