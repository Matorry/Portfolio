import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdArchitecture,
  MdCode,
  MdOutlineBuild,
  MdStorage,
  MdWeb,
} from "react-icons/md";
import profilePic from "../assets/profile.jpg"; // Asegúrate de tener la imagen en esta ruta
import "./Home.css";

const techCategories = [
  {
    title: "Frontend",
    icon: <MdWeb />,
    technologies: ["React", "Redux", "Angular", "RxJS"],
  },
  {
    title: "Backend",
    icon: <MdCode />,
    technologies: ["Express", "NestJS", "Node.js", "TypeScript"],
  },
  {
    title: "Bases de Datos",
    icon: <MdStorage />,
    technologies: ["PostgreSQL", "MongoDB", "Mongoose", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    icon: <MdOutlineBuild />,
    technologies: [
      "Docker",
      "Postman",
      "Jest",
      "Jasmine",
      "SonarCloud",
      "Git",
      "ESLint",
      "Cypress",
    ],
  },
  {
    title: "Arquitectura & Patrones",
    icon: <MdArchitecture />,
    technologies: ["Flux", "MVC", "Clean Architecture"],
  },
];

export default function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Foto y presentación */}
      <motion.div
        className="profile-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profilePic} alt="Rodrigo" className="profile-pic" />
        <div>
          <h1>
            🚀 Hola, soy <span className="highlight">Rodrigo</span>
          </h1>
          <p className="subtitle">
            Full Stack Developer | Especializado en JavaScript & TypeScript
          </p>
        </div>
      </motion.div>

      {/* Sección "Sobre Mí" */}
      <section className="about-me">
        <h2>Sobre Mí</h2>
        <p>
          Soy un desarrollador apasionado con experiencia en proyectos frontend
          y fullstack. Me he formado en diversas tecnologías modernas y he
          trabajado en proyectos que abarcan desde plataformas de comercio
          electrónico hasta aplicaciones de redes sociales. Mi formación y
          experiencia me permiten abordar retos de desarrollo con creatividad y
          eficiencia.
        </p>
        <a href="/CV-Rodrigo.pdf" download className="download-cv">
          Descargar mi CV
        </a>
      </section>

      {/* Stack Tecnológico por categorías */}
      <h2>💻 Stack Tecnológico</h2>
      <div className="stack-container">
        {techCategories.map((category, index) => (
          <div key={index} className="tech-category">
            <h3 className="category-title">
              {category.icon} {category.title}
            </h3>
            <div className="stack-grid">
              {category.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="tech-card"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enlaces a Redes */}
      <div className="social-links">
        <a href="https://github.com/Matorry" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/rodrigomartinceron"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </motion.section>
  );
}
