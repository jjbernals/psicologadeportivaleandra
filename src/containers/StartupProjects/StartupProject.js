import React, { useContext } from "react";
import "./StartupProjects.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const bonos = [
  {
    id: 1,
    titulo: "Bono Especial",
    descripcion: "Paga 10 sesiones y recibe 2 adicionales totalmente gratis.",
    image: "/bono.jpg", // Agrega una imagen representativa
    link: "https://wa.me/573205794183?text=Hola,%20quiero%20información%20acerca%20del%20bono%20de%20psicología%20deportiva.",
  },
];

export default function BonosPsicologia() {
  const { isDark } = useContext(StyleContext);

  return (
      <Fade bottom duration={1000} distance="20px">
        <div className="bonos-container" id="bonos">
          <h1 className="bonos-title">Bonos para sesiones de Psicología Deportiva</h1>
          <p className="bonos-subtitle">
            Aprovecha nuestras promociones y mejora tu rendimiento mental.
          </p>

          <div className="bonos-grid">
            {bonos.map((bono) => (
                <div key={bono.id} className={isDark ? "bono-card " : "bono-card"}>
                  <img src={bono.image} alt={bono.titulo} className="bono-image" />
                  <div className="bono-info">
                    <h5 className="bono-title">{bono.titulo}</h5>
                    <p className="bono-description">{bono.descripcion}</p>
                    <a href={bono.link} className="bono-button">Obtener Bono</a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </Fade>
  );
}