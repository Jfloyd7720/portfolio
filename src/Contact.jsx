// Contact.js
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-title">
        <span className="title-gradient">GET IN TOUCH</span>
      </h2>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of these channels:
          </p>

          <div className="contact-methods">
            <a href="mailto:jeffjamesfloyd@gmail.com" className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>jeffjamesfloyd@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/jeff-j-floyd"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaLinkedin className="contact-icon" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/jfloyd7720"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaGithub className="contact-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form action="https://formspree.io/f/mpwprewo" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
