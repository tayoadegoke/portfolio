import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <section className="hero-section">
          <h1 className="page-title">Get In Touch</h1>
          <p className="intro-text">
            I'm always interested in hearing about new opportunities and collaborations.
            Feel free to reach out through any of the channels below.
          </p>
        </section>

        <div className="contact-grid-simple">
          <div className="contact-methods-simple">
            <div className="contact-card-simple">
              <h3>Email</h3>
              <a href="mailto:omotayoadegoke19@gmail.com" className="contact-link">
                omotayoadegoke19@gmail.com
              </a>
            </div>

            <div className="contact-card-simple">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/omotayo-a-33a3a3120/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="contact-card-simple">
              <h3>GitHub</h3>
              <a
                href="https://github.com/tayoadegoke"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View GitHub Profile
              </a>
            </div>

            <div className="contact-card-simple">
              <h3>Resume</h3>
              <a
                href="https://drive.google.com/file/d/1TBhT1nQBJwLo5g-WjzkjRPyFErhcvkvd/view"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* <div className="availability-section-simple">
            <div className="availability-card">
              <h2>Current Status</h2>
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span>Open to opportunities</span>
              </div>
              <p className="availability-text">
                I'm currently open to full-time opportunities, freelance projects,
                and interesting collaborations. Let's build something great together!
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
