import { useEffect } from "react";
import "./contact.css";

function Contact() {
  useEffect(() => {
    document.body.style.background = "#201E50";
    return () => { document.body.style.background = ""; };
  }, []);
  const methods = [
    {
      label: "Email",
      display: "omotayoadegoke19@gmail.com",
      href: "mailto:omotayoadegoke19@gmail.com",
    },
    {
      label: "LinkedIn",
      display: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/omotayo-a-33a3a3120/",
      external: true,
    },
    {
      label: "GitHub",
      display: "View GitHub profile",
      href: "https://github.com/tayoadegoke",
      external: true,
    },
    {
      label: "Resume",
      display: "Download resume",
      href: "https://drive.google.com/file/d/1TBhT1nQBJwLo5g-WjzkjRPyFErhcvkvd/view",
      external: true,
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-eyebrow">Let's talk</div>
        <h1 className="contact-heading">
          Got a project<br /><em>in mind?</em>
        </h1>
        <p className="contact-intro">
          I'm always interested in hearing about new opportunities and
          collaborations — whether that's a full-time role, a freelance project,
          or just a great conversation about something you're building.
        </p>

        <div className="contact-grid-simple">
          {methods.map((m, i) => (
            <div key={i} className="contact-card-simple">
              <h3>{m.label}</h3>
              <a
                href={m.href}
                className="contact-link"
                {...(m.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {m.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
