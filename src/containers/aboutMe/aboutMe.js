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
                            Psicóloga especialista en el área de la psicología deportiva y del ejercicio; mi misión es ayudar a deportistas de alto rendimiento a alcanzar su máximo potencial...
                        </p>
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="about-me-image">
                        <img src="/dra.jpg" alt="Psicóloga" />
                    </div>
                </Fade>
            </div>
        </div>
    );
}
