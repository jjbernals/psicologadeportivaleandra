import React, { useState } from "react";
import "./Achievement.scss";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import Header from "../../components/header/Header";
import {StyleProvider} from "../../contexts/StyleContext";

const faqs = [
  {
    category: "Las preguntas más frecuentes",
    questions: [
      { question: "¿Qué es la Psicología deportiva?", answer: "Es una disciplina que ayuda a los atletas a mejorar su rendimiento mental y bienestar emocional." },
      { question: "¿La preparación mental solo es para deportistas profesionales?", answer: "No, cualquier persona que practique deporte puede beneficiarse de la preparación mental." },
      { question: "¿Cómo es una sesión de psicología deportiva?", answer: "Las sesiones incluyen evaluación, establecimiento de objetivos y técnicas psicológicas." },
      { question: "¿Está garantizado el secreto de lo que diga en la consulta?", answer: "Sí, la confidencialidad es un principio fundamental en la psicología." },
    ],
  },
  {
    category: "Preguntas sobre el psicólogo deportivo",
    questions: [
      { question: "¿Cómo sé si un psicólogo deportivo me puede ayudar?", answer: "Si sientes que factores mentales afectan tu rendimiento, un psicólogo deportivo puede ayudarte." },
      { question: "¿Qué diferencia hay entre un psicólogo clínico y uno deportivo?", answer: "El clínico trata problemas de salud mental, el deportivo mejora el rendimiento y bienestar del atleta." },
    ],
  },
  {
    category: "Sesiones Online",
    questions: [
      { question: "¿En qué consiste una sesión Online?", answer: "Es una consulta a distancia mediante videollamada, con los mismos beneficios de la presencial." },
      { question: "¿Qué necesito para la sesión online?", answer: "Un dispositivo con internet y una aplicación de videollamada." },
    ],
  },
  {
    category: "Tarifas y pagos",
    questions: [
      { question: "¿Qué tarifas puedo elegir?", answer: "Ofrecemos diferentes planes según la cantidad de sesiones contratadas." },
      { question: "¿Cómo realizo el pago?", answer: "Puedes pagar con tarjeta de crédito, transferencia bancaria o plataformas online." },
    ],
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <StyleProvider value={{ isDark: false, changeTheme: () => {} }}>
        <Header /> {/* Agregamos el Header aquí */}
        <div className="faq-container">
          <h1 className="faq-title">Preguntas Frecuentes</h1>
          <p className="faq-description">
            Encuentra respuestas a las dudas más comunes sobre las sesiones de psicología deportiva.
          </p>

          {faqs.map((category, catIndex) => (
              <div key={catIndex} className="faq-category">
                <h2 className="faq-category-title">{category.category}</h2>
                <ul className="faq-list">
                  {category.questions.map((item, index) => {
                    const qIndex = `${catIndex}-${index}`;
                    return (
                        <li key={qIndex} className="faq-item">
                          <button className={`faq-question ${openIndex === qIndex ? "open" : ""}`} onClick={() => toggleQuestion(qIndex)}>
                            {item.question}
                            <FaChevronDown className={`faq-icon ${openIndex === qIndex ? "rotate" : ""}`} />
                          </button>
                          {openIndex === qIndex && <p className="faq-answer">{item.answer}</p>}
                        </li>
                    );
                  })}
                </ul>
              </div>
          ))}

          <div className="faq-contact">
            <h2>¿Cómo puedo ayudarte?</h2>
            <p>Si no encontraste la respuesta que buscabas, contáctame directamente.</p>
            <a href="https://wa.me/573205794183" className="faq-whatsapp-button">
              <FaWhatsapp className="whatsapp-icon" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </StyleProvider>
  );
}
