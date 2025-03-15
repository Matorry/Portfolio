import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const [category, setCategory] = useState("frontend");

  const projects = [
    {
      name: "Cured Front",
      description: "Plataforma de comercio electrónico.",
      tech: "Angular, TypeScript, MVC",
      category: "frontend",
      repoFront: "https://github.com/Matorry/CuredFront",
      liveDemo: "https://cured-front.vercel.app/accueil",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Warhamster Game",
      description: "Gestiona tus torneos de Warhammer.",
      tech: "Ionic, Express, Prisma, PostgreSQL, Node.js",
      category: "fullstack",
      repoFront: "https://github.com/Matorry/warhamster.front",
      repoBack: "https://github.com/Matorry/Warhamster",
      liveDemo: "",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "E-commerce Platform",
      description: "Plataforma de comercio electrónico.",
      tech: "Angular, RxJS, Express, MongoDB, Node.js",
      category: "fullstack",
      repoFront: "https://github.com/Matorry/e.commerce",
      repoBack: "https://github.com/Matorry/e.commerce.back",
      liveDemo: "https://e-commerce-rust-six.vercel.app/home",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Angular Movie Hub",
      description: "Explora tus películas favoritas.",
      tech: "Angular, TypeScript, MVC",
      category: "frontend",
      repoFront: "https://github.com/Matorry/AngularMovieHub",
      liveDemo: "https://angular-movie-hub.vercel.app/home",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "LOTR Trading Cards",
      description:
        "Juego de cartas coleccionables basado en El Señor de los Anillos.",
      tech: "React, TypeScript, Flux",
      category: "frontend",
      repoFront: "https://github.com/Matorry/LOTR-cards",
      liveDemo: "https://lotr-cards.vercel.app/",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Social Network App",
      description: "Red social con autenticación y chat en tiempo real.",
      tech: "React, Redux, Express, MongoDB, Node.js",
      category: "fullstack",
      repoFront: "https://github.com/Matorry/Social-Network",
      repoBack: "",
      liveDemo: "",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Kill Team Companion",
      description:
        "Herramienta para gestionar equipos del juego de mesa Kill Team.",
      tech: "Angular, RxJS, Express, MongoDB, Node.js",
      category: "fullstack",
      repoFront: "https://github.com/Matorry/kill-team-front",
      repoBack: "https://github.com/Matorry/kill-team-back",
      liveDemo:
        "https://rodrigo-martin-final-project-front-202307-mad-6nk6.vercel.app/home",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "PokéAPI Explorer",
      description:
        "Aplicación para buscar y filtrar Pokémon usando la PokéAPI.",
      tech: "Angular, TypeScript, MVC",
      category: "frontend",
      repoFront: "https://github.com/Matorry/poke-api",
      liveDemo: "https://poke-api-six-beige.vercel.app/pokemons",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Rick & Morty Universe",
      description: "Explora personajes y ubicaciones de Rick & Morty.",
      tech: "Angular, Angular Material, TypeScript, MVC",
      category: "frontend",
      repoFront: "https://github.com/Matorry/Rick-Morty-Angular",
      liveDemo: "https://rick-morty-angular-phi.vercel.app/",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const filteredProjects = projects.filter((p) => p.category === category);

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>
        <FaLaptopCode /> Proyectos
      </h2>

      {/* Submenú de categorías */}
      <div className="project-filters">
        <button
          onClick={() => setCategory("frontend")}
          className={category === "frontend" ? "active" : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => setCategory("fullstack")}
          className={category === "fullstack" ? "active" : ""}
        >
          Full Stack
        </button>
      </div>

      {/* Lista de proyectos */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            {/* <img
              src={project.image}
              alt={project.name}
              className="project-image"
            /> */}
            <div className="project-info">
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>

              {/* Botones de repositorio y live demo */}
              <div className="repo-buttons">
                {project.repoFront && !project.repoBack ? (
                  <a
                    href={project.repoFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-button"
                  >
                    <FaGithub /> Código
                  </a>
                ) : (
                  <>
                    <a
                      href={project.repoFront}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-button"
                    >
                      <FaGithub /> Frontend
                    </a>
                    <a
                      href={project.repoBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-button"
                    >
                      <FaGithub /> Backend
                    </a>
                  </>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-button live-demo"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
