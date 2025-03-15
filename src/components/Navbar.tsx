import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [theme, setTheme] = useState("light");

  // Detectar cambios en el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cargar el tema guardado (modo claro por defecto)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme === "dark" ? "dark" : "";
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme === "dark" ? "dark" : "";
    localStorage.setItem("theme", newTheme);
  };

  // Componente switch para el toggle de tema
  const switchComponent = (
    <div className="switch-container">
      <input
        type="checkbox"
        id="theme-switch"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label htmlFor="theme-switch"></label>
    </div>
  );

  return (
    <nav className="navbar">
      {isMobile ? (
        <>
          {/* Switch reposicionado para móviles */}
          <div className="mobile-switch">{switchComponent}</div>
          {/* Menú hamburguesa para móviles */}
          <Menu right>
            <NavLink to="/" className="bm-item">
              Inicio
            </NavLink>
            <NavLink to="/projects" className="bm-item">
              Proyectos
            </NavLink>
            <NavLink to="/contact" className="bm-item">
              Contacto
            </NavLink>
          </Menu>
        </>
      ) : (
        <>
          {/* Menú normal para escritorio */}
          <ul className="nav-list">
            <li>
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>
          {switchComponent}
        </>
      )}
    </nav>
  );
}
