import logo from "../../assets/YT/sin-bg/logo.png"
import avatar from "../../assets/YT/sin-bg/avatar.jpg"
import styles from "./navbar.module.css"
import { NavLink } from "react-router-dom"


export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logoSection}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.linksSection}>

                <NavLink to={"/home"} className={({ isActive}) => ( isActive ? styles.linkActive : null)}>
                    <span>Home</span>
                </NavLink>

                <NavLink to={"/about"} className={({ isActive}) => ( isActive ? styles.linkActive : null)}>
                    <span>Acerca</span>
                </NavLink>

                <NavLink to={"/appointments"} className={({ isActive}) => ( isActive ? styles.linkActive : null)}>
                    <span>Turnos</span>
                </NavLink>
                
                <NavLink to={"/contact"} className={({ isActive}) => ( isActive ? styles.linkActive : null)}>
                    <span>Contacto</span>
                </NavLink>

            </div>
            <div className={styles.avatarSection}>
                <img src={avatar} alt="logo" />
            </div>
        </nav>
    )
}