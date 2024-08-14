import logo from "./images/logo.svg";
import React, { useRef } from "react";
import "./styles/App.css";
import "./styles/Navbar.css";
//import { Routes, Route, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { withNamespaces } from "react-i18next";
import i18n from "./i18n";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import Map from "./components/Map.js";
import Navbar from "./components/Navmap.js";
import logo_cranes from "./images/cranes.png";

function App({ t }) {
  const localizacionRef = useRef(null);
  const serviciosRef = useRef(null);
  const galeriaRef = useRef(null);
  const contactoRef = useRef(null);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <ScrollToTop />

      <div className="Navbar">
        <img className="logo" src={logo} alt="Logo" />

        <div className="languageButton">
          <button onClick={() => changeLanguage("es")}>es</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>

        <ul>
          <li
            onClick={() => scrollToSection(localizacionRef)}
            className="buttons"
          >
            {t("localization")}
          </li>
          <li onClick={() => scrollToSection(serviciosRef)} className="buttons">
            {t("services")}
          </li>
          <li onClick={() => scrollToSection(galeriaRef)} className="buttons">
            {t("gallery")}
          </li>
          <li onClick={() => scrollToSection(contactoRef)} className="buttons">
            {t("contact")}
          </li>
        </ul>
      </div>

      <div className="presentacion">
        <div className="presentacion_logo_text">
          <img className="logo_cranes" src={logo_cranes} alt="Logo_cranes" />
          <div class="box_text_presentation">
            <h1>Albergue Las Grullas</h1>
            <h2>{t("welcome")}</h2>
            <h3>{t("presentation")}</h3>
          </div>
        </div>
      </div>

      <div ref={localizacionRef} className="localizacion">
        <div classname="mapa">
          <div className="texto-mapa">
            <h1>{t("where")}</h1>
          </div>
          <Map />
        </div>
      </div>

      <div ref={serviciosRef} className="servicios">
        {t("services")}
      </div>
      <div ref={galeriaRef} className="galeria">
        {t("gallery")}
      </div>
      <div ref={contactoRef} className="contacto">
        {t("contact")}
      </div>
      <h1>{t("Welcome to React")}</h1>

      <div>
        <FloatingWhatsApp
          phoneNumber="635723824"
          accountName="Albergue Las Garzas"
          initialMessageByServer={t("Hi there! How can I assist you?")}
          statusMessage={t("Available")}
          placeholder={t("Write here...")}
          allowEsc={true}
        />
      </div>
    </div>
  );
}

export default withNamespaces()(App);
