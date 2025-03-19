import React, { useContext } from "react";
import "./AboutMe.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function AboutMe() {
    const { isDark } = useContext(StyleContext);

    return (
        <div className={isDark ? "dark-mode main about-me-section" : "main about-me-section"} id="about">
            <div className="about-me-container">
                <Fade left duration={1000}>
                    <div className="about-me-text">
                        <h1 className="about-me-heading">Sobre Mí</h1>
                        <p className="about-me-description">
                            Psicóloga especializada en el ámbito deportivo. Mi misión es ayudar a jugadores de alto rendimiento y equipos
                            a alcanzar su máximo potencial mental y emocional, de manera que puedan optimizar su rendimiento y disfrutar de su pasión por el deporte.
                        </p>
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="about-me-image">
                        <img src="/fotoDra.png" alt="Psicóloga" />
                    </div>
                </Fade>
            </div>
        </div>
    );
}
