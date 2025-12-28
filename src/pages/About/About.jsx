import "./about.css";

function About() {
  const experience = [
    {
      company: "Medivet",
      location: "Watford, UK",
      period: "2022-2025",
      role: "Software Engineer",
      bullets: [
        "Working on client facing web application using NextJs and Material UI to enable over 40,000 client's book medical appointments for their pets.",
        "Working on a staff portal web application using NextJs and MaterialUI to simplify day to day business activities like user management, cash submissions, drug requests and subscription product management.",
        "Working on backend API's using C# .NET to support requests from both clients and staff.",
        "Created documentation for running applications locally to enable new starters get up to speed.",
        "Wrote unit and integration tests using the React testing library and end to end tests using cypress, to ensure front end applications were robust, while developing features."
      ]
    },
    {
      company: "Co Amana",
      location: "Abuja, Nigeria - Remote",
      period: "2020-2021",
      role: "Front End Developer",
      description: "Built market web application using React and Semantic UI. Integrated Paystack payment processing."
    },
    {
      company: "PM Global Technology",
      location: "Lagos, Nigeria",
      period: "2019-2020",
      role: "Associate Software Engineer",
      description: "Created Node.js APIs for client data automation. Developed full-stack applications using React, Node, Express."
    },
    {
      company: "Bincom ICT Solutions",
      location: "Lagos, Nigeria",
      period: "2019",
      role: "Mobile Developer Intern",
      description: "Two-month internship focusing on Apache Cordova."
    }
  ];

  const skills = {
    frontend: ["CSS", "HTML", "JavaScript", "TypeScript", "React", "Next.js", "Angular"],
    styling: ["Bootstrap", "Material UI", "Tailwind CSS"],
    backend: ["Node.js", "C# .NET", "Python FastAPI"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    cloud: ["Azure"]
  };

  const education = [
    {
      degree: "Master's in Software Engineering",
      institution: "University of Bedfordshire",
      year: "2021-2022"
    },
    {
      degree: "B.Eng Electrical & Electronics Engineering",
      institution: "Bells University of Technology",
      year: "2012-2017"
    }
  ];

  const certifications = [
    "Microsoft Azure Fundamentals",
    "React Nanodegree"
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <section className="hero-section">
          <div className="about-hero-grid">
            <div>
              <h1 className="page-title">About Me</h1>
              <p className="intro-text">
                I'm a software engineer with over six years building web applications. My experience spans frontend frameworks (React, Next.js), backend development (Node.js, C#/.NET), and cloud services, primarily Azure.
              </p>
            </div>
            <div className="about-image-container">
              <img src="https://res.cloudinary.com/notthattayo/image/upload/v1766935756/tayo-beach_tqtpsh.jpg" alt="Tayo Adegoke" className="about-image" />
            </div>
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.company}</h3>
                      <p className="location">{exp.location}</p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <h4 className="role">{exp.role}</h4>
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

        <section className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Styling</h3>
              <div className="skill-tags">
                {skills.styling.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-tags">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud</h3>
              <div className="skill-tags">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2 className="section-title">Education</h2>
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

        <section className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <span className="cert-icon">✓</span>
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
