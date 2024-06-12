import axios from "axios";
import React, { useState } from "react";

const emailRegExp = /\S+@\S+\.\S+/;
const POST_LOGIN_USER_URL = "http://localhost:3000/users/login";

function Login() {
    //*ESTADO INICIAL
    const initialState = {
        username: "",
        password: "",
    };

    //*ESTADOS
    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    //*VALIDACIONES
    const validateUser = ({ username, password }) => {
        const errors = {};
        if (!username) errors.username = "Debe ingresar un username";
        if (!password) errors.password = "Debe ingresar un password";

        return errors;
    };

    //*HANDLERS
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });

        setErrors(
            validateUser({
                ...user,
                [name]: value,
            }),
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //BBDD
        const userData = {
            username: user.username,
            password: user.password,
        };
        //Lo pusheamos

        axios
            .post(POST_LOGIN_USER_URL, userData)
            .then(({ data }) => {
                alert("Usuario loggeado satisfactoriamente!");
                setUser(initialState);
            })
            .catch((error) => alert(error.response.data.error));
    };

    const handleBorrar = (event) => {
        event.preventDefault();
        setUser(initialState);
    };

    //*FUNCIONES
    const formData = [
        { label: "Username ", name: "username", type: "text" },
        { label: "Password ", name: "password", type: "password" },
    ];

    return (
        <div>
            <h2>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                {formData.map(({ label, name, type }) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={name}>
                        <label style={{ color: "white" }}>{label}</label>
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
                <button type="submit" disabled={Object.keys(user).some((e) => !user[e])}>
                    Log in
                </button>
                <button onClick={handleBorrar}> Borrar formulario</button>
            </form>
        </div>
    );
}

export default Login;

//Datos
