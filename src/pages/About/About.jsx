import "./about.css";

function About() {
  const experience = [
    {
      company: "Medivet",
      location: "Watford, UK",
      period: "2022–2026",
      role: "Software Engineer",
      bullets: [
        "Working on backend APIs using C# .NET to support requests from both clients and staff.",
        "Working on client-facing web application using Next.js and Material UI to enable over 40,000 clients to book medical appointments for their pets.",
        "Implemented third-party API integration with Stannp for mailing physical letters to clients, leveraging asynchronous patterns.",
        "Worked on a staff portal web application using Next.js and Material UI to simplify day-to-day business activities like user management, cash submissions, drug requests and subscription product management.",
        "Created documentation for running applications locally to enable new starters to get up to speed.",
        "Wrote unit and integration tests using the React Testing Library and end-to-end tests using Cypress.",
      ],
    },
    {
      company: "Co Amana",
      location: "Abuja, Nigeria — Remote",
      period: "2020–2021",
      role: "Front End Developer",
      description:
        "Built market web application using React and Semantic UI. Integrated Paystack payment processing.",
    },
    {
      company: "PM Global Technology",
      location: "Lagos, Nigeria",
      period: "2019–2020",
      role: "Associate Software Engineer",
      description:
        "Created Node.js APIs for client data automation. Developed full-stack applications using React, Node, Express.",
    },
    {
      company: "Bincom ICT Solutions",
      location: "Lagos, Nigeria",
      period: "2019",
      role: "Mobile Developer Intern",
      description: "Two-month internship focusing on Apache Cordova.",
    },
  ];

  const skills = {
    Frontend: [
      "CSS", "HTML", "JavaScript", "TypeScript", "React", "Next.js",
      "Bootstrap", "Material UI", "Tailwind CSS", "ShadCN", "Tanstack",
    ],
    Backend: ["Node.js", "C# .NET", "Python FastAPI"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "DevOps & Cloud": [
      "Linux", "Bash", "PowerShell", "YAML", "Networking", "Git",
      "Docker", "Kubernetes", "Terraform", "Azure", "Google Cloud",
    ],
  };

  const education = [
    {
      degree: "Master's in Software Engineering",
      institution: "University of Bedfordshire",
      year: "2021–2022",
    },
    {
      degree: "B.Eng Electrical & Electronics Engineering",
      institution: "Bells University of Technology",
      year: "2012–2017",
    },
  ];

  const certifications = ["Microsoft Azure Fundamentals", "React Nanodegree"];

  return (
    <div className="about-container">
      <div className="about-content">

        {/* Hero */}
        <div className="about-hero-grid">
          <div>
            <h1 className="page-title">About Me</h1>
            <p className="intro-text">
              I'm a software engineer with over six years building web applications.
              My experience spans frontend frameworks (React, Next.js), backend
              development (Node.js, C#/.NET), and cloud services, primarily Azure.
            </p>
          </div>
          <div className="about-image-container">
            <img
              src="https://res.cloudinary.com/notthattayo/image/upload/v1766935756/tayo-beach_tqtpsh.jpg"
              alt="Tayo Adegoke"
              className="about-image"
            />
          </div>
        </div>

        {/* Experience */}
        <section className="experience-section">
          <div className="section-divider">
            <div className="section-eyebrow-small">Career</div>
            <h2 className="section-title">Work experience</h2>
          </div>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.company}</h3>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p className="location">{exp.location}</p>
                  <p className="role">{exp.role}</p>
                  {exp.bullets ? (
                    <ul className="experience-bullets">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="skills-section">
          <div className="section-divider">
            <div className="section-eyebrow-small">Capabilities</div>
            <h2 className="section-title">Technical skills</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, tags]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {tags.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="education-section">
          <div className="section-divider">
            <div className="section-eyebrow-small">Background</div>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="certifications-section">
          <div className="section-divider">
            <div className="section-eyebrow-small">Credentials</div>
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
