// Home.js - Updated with new color scheme
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import "./Home.css";
import Timeline from "./Timeline";
import SkillsSection from "./SkillsSection";
import Hero from "./Hero";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Stock Portfolio Manager",
      description:
        "React-based web application that enables users to track, analyze, and optimize their stock portfolio with interactive charts and financial calculations.",
      technologies: ["React", "JavaScript", "Chart.js", "Financial APIs"],
      features: [
        "Stock Charts: Search and visualize historical price data",
        "Stock Calculator: Calculate shares and view investment breakdowns",
        "Portfolio Management: Track holdings and performance",
        "Sector Analysis: View diversification metrics",
      ],
      link: "/projects",
    },
    {
      id: 2,
      title: "News Platform (Frontend)",
      description:
        "React-based frontend that allows users to interact with articles, topics, and comments, integrating with a backend API.",
      technologies: ["React", "JavaScript", "CSS", "Axios"],
      features: [
        "Article browsing with topic filtering",
        "Commenting functionality (post/delete)",
        "Article voting system",
        "Sorting by date/votes",
        "Error handling and accessibility features",
      ],
      link: "/projects",
    },
    {
      id: 3,
      title: "News API (Backend)",
      description:
        "RESTful API allowing users to interact with articles, comments, and topics with full CRUD functionality.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Jest"],
      features: [
        "Article/comments CRUD operations",
        "User voting system",
        "Authentication middleware",
        "Error handling",
        "Agile development with GitHub",
      ],
      link: "/projects",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "Database Design", level: 80 },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">
          <span className="title-gradient">FEATURED PROJECTS</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-accent"></div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project <FaArrowRight className="arrow-icon" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}

      <Timeline />
      <SkillsSection></SkillsSection>
    </div>
  );
}

export default Home;
