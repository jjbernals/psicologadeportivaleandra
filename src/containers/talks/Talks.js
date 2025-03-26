import React from "react";
import "./Talks.scss";
import {StyleProvider} from "../../contexts/StyleContext";
import Header from "../../components/header/Header";

export default function Teleconsultas() {
  return (
    <StyleProvider
      value={{
        isDark: false,
        changeTheme: () => {}
      }}
    >
      <Header /> {/* Agregamos el Header aquí */}
      <div className="teleconsultas-container">
        <header className="teleconsultas-header">
          <h1>Teleconsultas en Psicología Deportiva</h1>
          <p>
            Accede a un acompañamiento profesional sin importar tu ubicación.
          </p>
        </header>

        <section className="teleconsultas-section">
          <h2>¿Qué son las teleconsultas?</h2>
          <p>
            Las teleconsultas en psicología deportiva permiten a los atletas y
            personas activas acceder a un profesional sin la necesidad de
            desplazarse, a través de videollamadas seguras y eficaces.
          </p>
        </section>

        <section className="teleconsultas-section">
          <h2>Beneficios de las Teleconsultas</h2>
          <ul>
            <li>Acceso a un especialista desde cualquier lugar.</li>
            <li>Flexibilidad de horarios adaptada a tu rutina.</li>
            <li>Privacidad y comodidad en un entorno familiar.</li>
            <li>Ideal para atletas en constante movimiento o competiciones.</li>
            <li>Reducción de costos y tiempo de desplazamiento.</li>
          </ul>
        </section>

        <section className="teleconsultas-section">
          <h2>¿Cómo funciona?</h2>
          <div className="steps">
            <div className="step">
              <span>📅</span>
              <h3>1. Agenda tu cita</h3>
              <p>Selecciona el día y la hora que mejor te convenga.</p>
            </div>
            <div className="step">
              <span>💻</span>
              <h3>2. Recibe un enlace</h3>
              <p>Te enviaremos un enlace para conectarte a la sesión.</p>
            </div>
            <div className="step">
              <span>🎧</span>
              <h3>3. Conéctate y habla</h3>
              <p>Accede a la sesión desde tu dispositivo favorito.</p>
            </div>
          </div>
        </section>

        <section className="teleconsultas-section">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq">
            <h3>
              ¿Las teleconsultas son igual de efectivas que las presenciales?
            </h3>
            <p>
              Sí, numerosos estudios han demostrado que las sesiones online
              tienen resultados similares a las consultas presenciales.
            </p>
          </div>
          <div className="faq">
            <h3>¿Qué plataforma se usa para la consulta?</h3>
            <p>
              Utilizamos plataformas seguras como Zoom, Google Meet o Microsoft
              Teams.
            </p>
          </div>
          <div className="faq">
            <h3>¿Necesito algún equipo especial?</h3>
            <p>
              Solo necesitas una conexión estable a internet y un dispositivo
              con cámara y micrófono.
            </p>
          </div>
        </section>
      </div>
    </StyleProvider>
  );
}
