import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;

  return (
      <>
        {/* Icono del menú hamburguesa */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <Headroom>
          <header className={`header ${isDark ? "dark-menu" : ""} ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
              <span className="logo-name">{greeting.username}</span> <br />
              <span className="logo-name2">Psicologa clinica deportiva</span>
            </a>

            <ul className="menu">
              {viewSkills && <li><a href="/#about" onClick={() => setMenuOpen(false)}>SOBRE MI</a></li>}
              {viewExperience && <li><a href="/#experience" onClick={() => setMenuOpen(false)}>SERVICIOS</a></li>}
              {viewBlog && <li><a href="/#blogs" onClick={() => setMenuOpen(false)}>Blogs</a></li>}
              <li><a href="/#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
              {viewAchievement && <li><a href="/faqs" onClick={() => setMenuOpen(false)}>FAQs</a></li>}
              <li><a href="/telecitas" onClick={() => setMenuOpen(false)}>Tele Citas</a></li>
            </ul>
          </header>
        </Headroom>
      </>
  );
}
export default Header;
