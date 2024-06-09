import logo from "../../assets/YT/sin-bg/logo.png"
import avatar from "../../assets/YT/sin-bg/avatar.jpg"
import styles from "./navbar.module.css"


export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logoSection}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.linksSection}>
                <span>Home</span>
                <span>Acerca</span>
                <span>Turnos</span>
                <span>Contacto</span>
            </div>
            <div className={styles.avatarSection}>
                <img src={avatar} alt="logo" />
            </div>
        </nav>
    )
}