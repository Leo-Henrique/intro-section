import React from 'react'
import styles from "./style.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <span>
                    Desafio do 
                </span>

                {"\n"}

                <a href="https://www.frontendmentor.io/home"
                target="_blank"
                rel="external noopener noreferrer">
                    Frontend Mentor
                </a>.
            </p>
            <p>
                <span>
                    Desenvolvido por
                </span>

                {"\n"}
                
                <a href="https://www.linkedin.com/in/leonardo-henrique-/"
                target="_blank"
                rel="external noopener noreferrer">
                    Leonardo Henrique
                </a>.
            </p>
        </footer>
    )
}

export default Footer