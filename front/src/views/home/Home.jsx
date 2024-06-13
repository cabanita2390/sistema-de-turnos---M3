import { Link } from "react-router-dom";
import Card from "../../components/card/Card.jsx";
import Button from "../../components/button/Button.jsx";

function Home() {
    return (
        <>
            <h2>Bienvenid@</h2>
            <hr />
            <h2>¿Es tu primera vez acá?</h2>

                <Link to={"/register"}>
                    <Button text="Registrarse"/>
                </Link>
            
            <h2>¿Ya tienes una cuenta?</h2>
                
                <Link to={"/login"}>
                    <Button text="Log In"/>
                </Link>
            
        </>
    );
}

export default Home;
