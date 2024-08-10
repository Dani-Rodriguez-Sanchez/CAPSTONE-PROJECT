//import logo from './logo.svg';
import React, { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const localizacionRef = useRef(null);
  const serviciosRef = useRef(null);
  const galeriaRef = useRef(null);
  const contactoRef = useRef(null);

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
            Localizacion
          </li>
          <li onClick={() => scrollToSection(serviciosRef)} className="buttons">
            Servicios
          </li>
          <li onClick={() => scrollToSection(galeriaRef)} className="buttons">
            Galeria
          </li>
          <li onClick={() => scrollToSection(contactoRef)} className="buttons">
            Contacto
          </li>
        </ul>
      </div>
      <div className="presentacion">
        <h3>Presentacion</h3>
      </div>
      <div ref={localizacionRef} className="localizacion">
        <h3>Localizacion</h3>
      </div>
      <div ref={serviciosRef} className="servicios">
        <h3>Servicios</h3>
      </div>
      <div ref={galeriaRef} className="galeria">
        <h3>Galeria</h3>
      </div>
      <div ref={contactoRef} className="contacto">
        <h3>Contacto</h3>
      </div>
    </div>
  );
}

export default App;
