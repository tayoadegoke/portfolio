import { useState } from "react";
import "./projects.css";

function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "RTees Naturale",
      description:
        "E-commerce application for natural products featuring product management, shopping cart, checkout flow, and order processing. Built with modern headless CMS architecture and deployed using Docker on Google Cloud Run.",
      tech: ["Next.js", "Tailwind CSS", "ShadCN UI", "Sanity.io", "Firebase", "Docker", "Google Cloud"],
      image: "https://res.cloudinary.com/notthattayo/image/upload/v1766935757/rtees_w8lo59.png",
      liveUrl: "https://rteesweb-909119538318.us-east1.run.app/",
      category: "Exploration",
    },
    {
      title: "Solar Data",
      description:
        "A solar energy management application that enables users to register installation locations and specify equipment requirements. Features user authentication, Google Maps integration for location marking, and internationalisation support.",
      tech: ["CSS", "Next.js", "Material UI", "Python", "FastAPI", "Google APIs", "Docker", "SQLite"],
      image: "https://res.cloudinary.com/notthattayo/image/upload/v1766935756/sd_zskwvl.png",
      liveUrl: "https://solar-data.tech.tayoadegoke.com",
      githubUrl: "https://github.com/tayoadegoke/solar-data",
      category: "Exploration",
    },
    {
      title: "Movie Review",
      description: "An application to review Netflix movies and watch movie trailers.",
      tech: ["React", "Material UI", "Node.js", "Express", "MongoDB", "Firebase"],
      image: "https://res.cloudinary.com/notthattayo/image/upload/v1643374787/netflix.png",
      liveUrl: "https://movie-review-966066459395.europe-west1.run.app/",
      githubUrl: "https://github.com/notthattayo/netflix-review",
      category: "Exploration",
    },
    {
      title: "Sample UI Build",
      description:
        "A sample page based on a given design image with no other assets provided apart from the design reference.",
      tech: ["React", "CSS", "Framer Motion"],
      image: "https://res.cloudinary.com/notthattayo/image/upload/v1698180270/samplePage.png",
      liveUrl: "https://tayoadegoke.github.io/onlycoders-samplepage/",
      githubUrl: "https://github.com/tayoadegoke/onlycoders-samplepage",
      designUrl: "https://drive.google.com/file/d/1xQhvv3Qjqpk8fiycD5u0YdjPzCQnWJdJ/view",
      category: "Exploration",
    },
    {
      title: "Bugzy Music Player",
      description:
        "A simple music player application that allows users to listen to Bugzy Malone songs. Features include song duration display, volume controls, fast forward/rewind, next/previous song navigation, and pause/play functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://res.cloudinary.com/notthattayo/image/upload/v1689076789/Screen_Shot_2023-07-11_at_12.59.24_PM.png",
      liveUrl: "https://tayoadegoke.github.io/Bugzymusicplayer/",
      githubUrl: "https://github.com/tayoadegoke/Bugzymusicplayer",
      category: "Exploration",
    },
  ];

  const categoryFiltered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const allTechs = [
    "All",
    ...new Set(categoryFiltered.flatMap((p) => p.tech)),
  ].sort();

  const filtered =
    selectedTech === "All"
      ? categoryFiltered
      : categoryFiltered.filter((p) => p.tech.includes(selectedTech));

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedTech("All");
  };

  return (
    <div className="projects-container">
      <div className="projects-content">

        <div className="projects-hero">
          <div className="page-eyebrow">Selected work</div>
          <h1 className="page-title">Projects</h1>
          <p className="intro-text">
            Here are some of the projects I've worked on. Some are experimental
            projects I built out of curiosity, to practice my skills, and also,
            to improve my understanding of different parts of software development.
          </p>
        </div>

        <div className="category-tabs">
          {["All", "Production", "Exploration"].map((cat) => (
            <button
              key={cat}
              className={`category-tab ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat === "All" ? "All projects" : cat}
            </button>
          ))}
        </div>

        <div className="filter-section">
          <p className="filter-title">Filter by technology</p>
          <div className="filter-buttons">
            {allTechs.map((tech) => (
              <button
                key={tech}
                className={`filter-btn ${selectedTech === tech ? "active" : ""}`}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="projects-grid">
            {filtered.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          GitHub
                        </a>
                      )}
                      {project.designUrl && (
                        <a
                          href={project.designUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Design
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-tag"
                        onClick={() => setSelectedTech(tech)}
                        style={{ cursor: "pointer" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <p>No projects found for the selected filters.</p>
            <button
              className="filter-btn"
              onClick={() => {
                setSelectedTech("All");
                setSelectedCategory("All");
              }}
            >
              Show all projects
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Projects;
