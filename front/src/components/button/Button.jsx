/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
    return (
        <div className={styles.buttonContainer}> {/* Comentario: Añadido para centrar el botón */}
            <button className={styles.button} onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default Button;
