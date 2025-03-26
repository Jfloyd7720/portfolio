// Home.js - Updated with new color scheme
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import "./home.css";
import Timeline from "./Timeline";
import SkillsSection from "./SkillsSection";
import Hero from "./Hero";
import { Link } from "react-router-dom";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Stock Portfolio Manager",
      description:
        "React-based web application that enables users to track, analyse, and optimise their stock portfolio with interactive charts and financial calculations.",
      technologies: ["React", "JavaScript", "Chart.js", "Financial APIs"],
      features: [
        "Stock Charts: Search and visualise historical price data",
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
      title: "Habit Tracker (Mobile App)",
      description:
        "A mobile app that combines habit tracking with a virtual pet companion, using AI to generate responses and motivate users.",
      features: [
        "Virtual pet that reacts to your habit completion",
        "AI-generated responses and encouragement",
        "Habit creation, tracking, and editing",
        "Coin reward system for completing habits",
        "In-app store to buy items for your pet",
        "Social features to add friends and compare progress",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "PostgreSQL",
        "Node.js",
        "OpenAI API",
        "Firebase Authentication",
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
          <span id="white" className="section-title">
            FEATURED PROJECTS
          </span>
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
              <Link to={project.link} className="project-link">
                View Project <FaArrowRight className="arrow-icon" />
              </Link>
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
