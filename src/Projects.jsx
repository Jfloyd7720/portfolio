import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

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
      demo: "#",
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
      demo: "#",
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
      demo: "#",
    },
  ];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">
          <span className="title-gradient">PROJECTS</span>
        </h1>
        <p className="projects-subtitle">
          A collection of my technical work and contributions
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h2>{project.title}</h2>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                >
                  <FaGithub className="project-icon" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt className="project-icon" />
                  </a>
                )}
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-features">
              <h3>Key Features:</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h3>Technologies:</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
