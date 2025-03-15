import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdArchitecture,
  MdCode,
  MdOutlineBuild,
  MdStorage,
  MdWeb,
} from "react-icons/md"; // Nuevos iconos
import profilePic from "../assets/profile.jpg"; // Agrega tu foto en /src/assets/
import "./Home.css";

// Mapeo de categorías con nuevos iconos
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
      "Node-RED",
      "Postman",
      "Jest",
      "Jasmine",
      "SonarCloud",
      "Git",
      "ESLint",
      "Prettier",
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
    <section className="home">
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
        <a href="https://github.com/Matorry" target="_blank">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/rodrigomartinceron" target="_blank">
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}
