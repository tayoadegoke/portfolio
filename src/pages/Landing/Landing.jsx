import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./landing.css";

function Landing() {
  const featuredProject = {
    title: "RTees Naturale",
    description: "E-commerce application for natural products built with Next.js and Sanity CMS",
    tech: ["Next.js", "Tailwind CSS", "Sanity.io", "Firebase", "Docker", "Google Cloud"],
    videoUrl: "https://www.youtube.com/embed/Z6op1NlARyQ",
    link: "https://rteesweb-909119538318.us-east1.run.app/"
  };

  const recentBlogPosts = [
    {
      title: "How I keep my typescript front ends in sync with my non typescript backends, using the open api spec",
      link: "https://blog.tech.tayoadegoke.com/how-i-keep-my-typescript-front-ends-in-sync-with-my-non-typescript-backends-using-the-open-api-spec",
      date: "Recent"
    }
  ];

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="intro-section">
          <h1 className="greeting">Hello 👋🏽</h1>
          <h2 className="name">
            I'm <span className="highlight">Tayo Adegoke</span>
          </h2>
          <p className="title">Full Stack Software Engineer</p>
          <p className="description">
            Building scalable web applications with over 6 years of experience in modern JavaScript frameworks,
            backend technologies, and cloud infrastructure.
          </p>

          <div className="cta-buttons">
            <Link to="/about" className="btn btn-primary">
              About Me
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>

          {/* <div className="social-links">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/omotayo-a-33a3a3120/"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a
              href="mailto:omotayoadegoke19@gmail.com"
              rel="noopener noreferrer"
              aria-label="Email"
              className="social-link"
            >
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>
            <a
              target="_blank"
              href="https://github.com/tayoadegoke"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </div> */}
        </div> 

        <div className="profile-section">
          <img
            className="profile-image"
            src="https://avatars.githubusercontent.com/u/44408277?v=4"
            alt="Tayo Adegoke"
          />
        </div>
      </div>

      {/* Project Showcase Section */}
      <section className="showcase-section">
        <div className="section-header">
          <h2 className="section-title-landing">Featured Project</h2>
          <Link to="/projects" className="view-more-link">View All Projects →</Link>
        </div>
        <div className="featured-project-container">
          <div className="featured-project-card-single">
            <div className="project-video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={featuredProject.videoUrl}
                title={featuredProject.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="project-content">
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <div className="project-tech">
                {featuredProject.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                View Live Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-section">
        <div className="section-header">
          <h2 className="section-title-landing">Recent Blog Posts</h2>
          <a href="https://blog.tech.tayoadegoke.com" target="_blank" rel="noopener noreferrer" className="view-more-link">
            View All Posts →
          </a>
        </div>
        <div className="blog-posts-list">
          {recentBlogPosts.map((post, index) => (
            <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="blog-post-card">
              <div className="blog-post-meta">
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <span className="read-more">Read more →</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Landing;
