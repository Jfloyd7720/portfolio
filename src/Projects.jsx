import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./projects.css";
import image from "./assets/stock.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Portfolio Manager",
      description:
        "React-based web application that enables users to track, analyze, and optimize their stock portfolio with interactive charts and financial calculations.",
      features: [
        "Stock Charts: Search and visualize historical price data",
        "Stock Calculator: Calculate shares and view investment breakdowns",
        "Portfolio Management: Track holdings and performance",
        "Sector Analysis: View diversification metrics",
      ],
      technologies: ["React", "JavaScript", "Chart.js", "Financial APIs"],
      github: "https://github.com/Jfloyd7720/Stock-Portfolio-Manager",
      screenshots: [
        { url: image, caption: "Interactive stock chart view" },
        { url: image, caption: "Portfolio analysis dashboard" },
      ],
    },
    {
      id: 2,
      title: "News Platform (Frontend)",
      description:
        "React-based frontend that allows users to interact with articles, topics, and comments, integrating with a backend API.",
      features: [
        "Article browsing with topic filtering",
        "Commenting functionality (post/delete)",
        "Article voting system",
        "Sorting by date/votes",
        "Error handling and accessibility features",
      ],
      technologies: ["React", "JavaScript", "CSS", "Axios"],
      github: "https://github.com/Jfloyd7720/FE-Project-NC-News",
      screenshots: [
        { url: image, caption: "Article listing page" },
        { url: image, caption: "Comment section" },
      ],
    },
    {
      id: 3,
      title: "News API (Backend)",
      description:
        "RESTful API allowing users to interact with articles, comments, and topics with full CRUD functionality.",
      features: [
        "Article/comments CRUD operations",
        "User voting system",
        "Authentication middleware",
        "Error handling",
        "Agile development with GitHub",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Jest"],
      github: "https://github.com/Jfloyd7720/Northcoders-News-API",
      screenshots: [
        { url: image, caption: "API documentation" },
        { url: image, caption: "Database schema" },
      ],
    },
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="projects-section">
      <div className="section-header">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span className="title-gradient">PROJECTS</span>
        </motion.h1>
        <p className="section-subtitle">
          A collection of my technical work and contributions
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <motion.div
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              variants={cardVariants}
            >
              <div className="card-header">
                <h2>{project.title}</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub className="github-icon" />
                </a>
              </div>

              <p className="card-description">{project.description}</p>

              <div className="card-features">
                <h3>Key Features:</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="card-technologies">
                <h3>Technologies:</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="project-screenshots"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={galleryVariants}
            >
              <motion.div
                className="screenshot-grid"
                variants={galleryVariants}
              >
                {project.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="screenshot-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={screenshot.url}
                      alt={`${project.title} - ${screenshot.caption}`}
                      loading="lazy"
                    />
                    <p className="screenshot-caption">{screenshot.caption}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
