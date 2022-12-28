import React from 'react'
import Button from "../Button"
import { ReactComponent as SVGDatabiz } from "../../assets/client-databiz.svg"
import { ReactComponent as SVGAudiophile } from "../../assets/client-audiophile.svg"
import { ReactComponent as SVGMeet } from "../../assets/client-meet.svg"
import { ReactComponent as SVGMaker } from "../../assets/client-maker.svg"
import ImgMainMobile from "../../assets/image-hero-mobile.png";
import ImgMainDesktop from "../../assets/image-hero-desktop.png";
import styles from "./style.module.scss";

const Intro = () => {
    const clients = [SVGDatabiz, SVGAudiophile, SVGMeet, SVGMaker];

    return (
        <main className={styles.intro}>
            <div className={`container ${styles.introContainer}`}>
                <div className={styles.introContent}>
                    <h1 className="title">
                        Realize trabalho remoto
                    </h1>

                    <p>
                        Coloque sua equipe em sincronia, independentemente da sua localização. Simplifique processos, crie rituais de equipe e veja a produtividade disparar.
                    </p>

                    <Button text="Saber mais"
                    size="normal" 
                    filled={true} />

                    <ul className={styles.introClients}>
                        {clients.map((client, index) => {
                            return <li key={index}>{React.createElement(client)}</li>
                        })}
                    </ul>
                </div>

                <div className={styles.introImg}>
                    <picture>
                        <source srcSet={ImgMainMobile}
                        media="(max-width: 767.98px)"
                        type="image/png" />

                        <img src={ImgMainDesktop}
                        alt="Foto de uma pessoa trabalhando remotamente através de um notebook" />
                    </picture>
                </div>
            </div>
        </main>
    )
}

export default Intro