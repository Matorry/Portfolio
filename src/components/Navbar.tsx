import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detectar cambios de tamaño en la pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {isMobile ? (
        // Menú Hamburguesa en móviles
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
      ) : (
        // Menú normal en escritorio
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
      )}
    </nav>
  );
}
