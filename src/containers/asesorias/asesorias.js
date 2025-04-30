import React from "react";
import "./asesorias.scss";
import Header from "../../components/header/Header";
import { StyleProvider } from "../../contexts/StyleContext";

const legalServices = [
    {
        title: "Asesoría Legal General",
        items: [
            "Asesorar a deportistas, clubes, federaciones, y asociaciones",
            "Elaborar y negociar contratos laborales, de patrocinio, y de prestación de servicios",
            "Asesorar en la gestión administrativa",
            "Asesorar en la organización de asambleas",
            "Asesorar en la formulación de políticas",
        ],
    },
    {
        title: "Gestión de Contratos",
        items: [
            "Negociar y redactar contratos deportivos",
            "Asesorar en la resolución de disputas contractuales",
            "Asesorar en la negociación de convenios con entidades públicas y privadas",
        ],
    },
    {
        title: "Representación en Litigios",
        items: [
            "Representar a deportistas en procesos disciplinarios, incluyendo casos de dopaje",
            "Representar a clientes en casos de litigio y arbitraje relacionados con asuntos deportivos",
        ],
    },
    {
        title: "Capacitación",
        items: [
            "Capacitar a clubes, ligas, y federaciones sobre temas relativos al derecho deportivo",
            "Capacitar en normatividad deportiva",
        ],
    },
    {
        title: "Elaboración de Reglamentos",
        items: [
            "Elaborar y actualizar reglamentos internos y estatutos",
        ],
    },
    {
        title: "Derechos de Imagen y Marcas",
        items: [
            "Ayudar a maximizar el valor de la imagen y marca en acuerdos de patrocinio, licencias, y promociones",
        ],
    },
];

export default function LegalAdvice() {
    return (
        <StyleProvider value={{ isDark: false, changeTheme: () => {} }}>
            <Header />
            <div className="legal-container">
                <h1 className="legal-title">Asesorías Legales en el Deporte</h1>
                <p className="legal-description">
                    Servicios profesionales orientados al entorno legal deportivo para atletas, clubes, asociaciones y entidades relacionadas.
                </p>

                {legalServices.map((section, index) => (
                    <div className="legal-section" key={index}>
                        <h2 className="legal-section-title">{section.title}</h2>
                        <ul className="legal-list">
                            {section.items.map((item, idx) => (
                                <li className="legal-item" key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="legal-contact">
                    <h2>¿Necesitas asesoría personalizada?</h2>
                    <p>Contáctame para brindarte una solución legal adaptada a tus necesidades deportivas.</p>
                    <a href="https://wa.me/573205794183" className="legal-whatsapp-button">
                        <span className="whatsapp-icon">💬</span> Contactar por WhatsApp
                    </a>
                </div>
            </div>
        </StyleProvider>
    );
}
