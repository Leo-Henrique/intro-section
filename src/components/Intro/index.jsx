import React from 'react'
import Button from "../Button"
import { ReactComponent as SVGDatabiz } from "../../assets/client-databiz.svg"
import { ReactComponent as SVGAudiophile } from "../../assets/client-audiophile.svg"
import { ReactComponent as SVGMeet } from "../../assets/client-meet.svg"
import { ReactComponent as SVGMaker } from "../../assets/client-maker.svg"
import ImgMainMobile from "../../assets/image-hero-mobile.png";
import ImgMainDesktop from "../../assets/image-hero-desktop.png";

const Intro = () => {
    const clients = [SVGDatabiz, SVGAudiophile, SVGMeet, SVGMaker];

    return (
        <main>
            <div>
                <h1>
                    Realize trabalho remoto
                </h1>

                <p>
                    Coloque sua equipe em sincronia, independentemente da sua localização. Simplifique processos, crie rituais de equipe e veja a produtividade disparar.
                </p>

                <Button text="Saber mais"
                size="normal" 
                filled={true} />

                <ul>
                    {clients.map((client, index) => {
                        return <li key={index}>{React.createElement(client)}</li>
                    })}
                </ul>
            </div>

            <div>
                <picture>
                    <source srcSet={ImgMainMobile}
                    media="(max-width: 767.98px)"
                    type="image/png" />

                    <img src={ImgMainDesktop}
                    alt="" />
                </picture>
            </div>
        </main>
    )
}

export default Intro