import {
  FaReact,
  FaPython,
  FaDatabase,
  FaServer,
  FaCode,
  FaChartBar,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJest,
  SiFigma,
} from "react-icons/si";
import "./skillsSection.css";

function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
      ],
      color: "var(--vscode-keyword)" /* Blue */,
    },
    {
      title: "Frontend",
      icon: <FaReact className="category-icon" />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "UX/UI Design", icon: <SiFigma /> },
        { name: "Accessibility", icon: <SiFigma /> },
      ],
      color: "var(--vscode-function)" /* Light yellow */,
    },
    {
      title: "Backend",
      icon: <FaServer className="category-icon" />,
      skills: [
        { name: "Node.js", icon: <FaServer /> },
        { name: "Express", icon: <FaServer /> },
        { name: "REST APIs", icon: <FaServer /> },
      ],
      color: "var(--vscode-string)" /* Orange */,
    },
    {
      title: "Data & Testing",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "SQL/PostgreSQL", icon: <FaDatabase /> },
        { name: "Jest Testing", icon: <SiJest /> },
        { name: "TDD", icon: <SiJest /> },
        { name: "Data Analysis", icon: <FaChartBar /> },
      ],
      color: "var(--vscode-number)" /* Green */,
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">
        <span id="white" className="title-gradient">
          TECHNICAL SKILLS
        </span>
      </h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-category"
            style={{
              "--category-color": category.color,
              borderTop: `3px solid ${category.color}`,
            }}
          >
            <div className="category-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-badge"
                  style={{
                    borderColor: category.color,
                    color: category.color,
                  }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
