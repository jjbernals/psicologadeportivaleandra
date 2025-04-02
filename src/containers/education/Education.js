import React from "react";
import "./Education.scss";
import { educationInfo } from "../../portfolio";

const cardColors = [
    "rgba(155, 89, 182, 0.4)",  // Morado suave
    "rgba(241, 196, 15, 0.4)" ,  // Amarillo pastel
    "rgba(52, 152, 219, 0.4)",  // Azul claro
];

export default function Education() {
    if (educationInfo.display) {
        return (
            <div className="education-section" id="education">
                <h1 className="education-heading">🎓 Formación Académica</h1>
                <div className="education-card-container">
                    {educationInfo.schools.map((school, index) => (
                        <div
                            key={index}
                            className="education-card"
                            style={{ background: cardColors[index % cardColors.length] }}
                        >
                            <img src={school.logo} alt={school.name} />
                            <h3>{school.schoolName}</h3>
                            <p>{school.subHeader}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
}
