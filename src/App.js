//import logo from './logo.svg';
import React, { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { withNamespaces } from "react-i18next";
import i18n from "./i18n";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";

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
      <div className="hero">
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
      <div>
        <button onClick={() => changeLanguage("es")}>es</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      <div className="presentacion"></div>
      <div ref={localizacionRef} className="localizacion">
        <h3>{t("localization")}</h3>
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
          phoneNumber="0000000000"
          accountName="Albergue Las Garzas"
          avatar="/images/avatar.webp"
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
