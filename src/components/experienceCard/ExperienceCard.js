import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

const experienceCardColors = [
    "rgba(138, 43, 226, 0.3)",  // Morado suave
    "rgba(52, 152, 219, 0.3)",  // Azul claro
    "rgba(241, 196, 15, 0.3)",  // Amarillo pastel
    "rgba(231, 76, 60, 0.3)",   // Rojo coral suave
    "rgba(46, 204, 113, 0.3)"   // Verde menta claro
];

export default function ExperienceCard({ cardInfo, isDark, index }) {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined"
            ? null
            : "rgb(" + values.join(", ") + ")";
    }

    const GetDescBullets = ({ descBullets, isDark }) => {
        return descBullets
            ? descBullets.map((item, i) => (
                <li
                    key={i}
                    className={isDark ? "subTitle dark-mode-text" : "subTitle"}
                >
                    {item}
                </li>
            ))
            : null;
    };

    return (
        <div
            className={isDark ? "experience-card-dark" : "experience-card"}
            style={{ background: experienceCardColors[index % experienceCardColors.length] }}
        >
            <div className="experience-banner">
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company"></div>

                <img
                    crossOrigin={"anonymous"}
                    ref={imgRef}
                    className="experience-roundedimg"
                    src={cardInfo.companylogo}
                    alt={cardInfo.company}
                    onLoad={() => getColorArrays()}
                />
            </div>
            <div className="experience-text-details">
                <h5
                    className={
                        isDark
                            ? "experience-text-role dark-mode-text"
                            : "experience-text-role"
                    }
                >
                    {cardInfo.role}
                </h5>
                <h5
                    className={
                        isDark
                            ? "experience-text-date dark-mode-text"
                            : "experience-text-date"
                    }
                >
                    {cardInfo.date}
                </h5>
                <p
                    className={
                        isDark
                            ? "subTitle experience-text-desc dark-mode-text"
                            : "subTitle experience-text-desc"
                    }
                >
                    {cardInfo.desc}
                </p>
                <ul>
                    <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
                </ul>
            </div>
        </div>
    );
}
