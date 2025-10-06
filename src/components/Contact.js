import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Matara |{" "}
          <a href="mailto:sahannimantha2233@gmail.com">
            sahannimantha2233@gmail.com
          </a>{" "}
          | <a href="tel:+94715270769">+94 715 270 769</a> |{" "}
          <a
            href="https://github.com/SahanNimantha99"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/Sahan-Nimantha"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <div className="contact-card">
          <form>
            <div className="form-group">
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
