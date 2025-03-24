import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  const name = "JEFF FLOYD";
  const [typedName, setTypedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timer = setTimeout(() => {
        setTypedName((prev) => prev + name[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150); // Typing speed (ms per character)

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="hero-content">
      <h1 className="hero-title">
        <span className="title-gradient">
          {typedName}
          {currentIndex < name.length && (
            <span className="blinking-cursor">|</span>
          )}
        </span>
      </h1>

      <h2 className="hero-subtitle">SOFTWARE DEVELOPER</h2>

      <p className="hero-description">
        Building{" "}
        <span className="text-highlight">innovative digital solutions</span>{" "}
        with clean code and modern technologies.
      </p>

      <div className="social-links">
        {[
          {
            icon: <FaGithub style={{ color: "#569cd6" }} />,
            url: "https://github.com/jfloyd7720",
          },
          {
            icon: <FaLinkedin style={{ color: "#569cd6" }} />,
            url: "https://www.linkedin.com/in/jeff-j-floyd/",
          },
          {
            icon: <FaEnvelope style={{ color: "#569cd6" }} />,
            url: "mailto:jeffjamesfloyd@gmail.com",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="social-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Hero;
