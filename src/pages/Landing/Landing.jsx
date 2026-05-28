import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = document.querySelectorAll(
      ".stat-item, .landing-project-card, .blog-post-card"
    );
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredProject = {
    title: "RTees Naturale",
    description:
      "E-commerce application for natural products featuring product management, shopping cart, checkout flow, and order processing. Built with modern headless CMS architecture and deployed using Docker on Google Cloud Run.",
    tech: ["Next.js", "Tailwind CSS", "Sanity.io", "Firebase", "Docker", "Google Cloud"],
    videoUrl: "https://www.youtube.com/embed/Z6op1NlARyQ",
    link: "https://rteesweb-909119538318.us-east1.run.app/",
  };

  const recentBlogPosts = [
    {
      title:
        "How I keep my TypeScript front ends in sync with my non-TypeScript backends, using the Open API spec",
      link: "https://blog.tech.tayoadegoke.com/how-i-keep-my-typescript-front-ends-in-sync-with-my-non-typescript-backends-using-the-open-api-spec",
      date: "Recent",
    },
  ];

  return (
    <div className="landing-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-headline">
            I'm <em>Tayo Adegoke</em>
          </h1>
          <p className="hero-title-sub">Full Stack Software Engineer</p>
          <p className="hero-description">
            Building scalable web applications with over six years of experience
            in modern JavaScript frameworks, backend technologies, and cloud
            infrastructure.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn-primary">
              About me
            </Link>
            <Link to="/projects" className="btn-ghost view-projects">
              View projects →
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="https://avatars.githubusercontent.com/u/44408277?v=4"
              alt="Tayo Adegoke"
              className="hero-photo"
            />
          </div>
       </div>
      </section>

      

      {/* Featured project */}
      <section className="showcase-section">
        <div className="showcase-header">
          <div>
            <div className="section-eyebrow">Featured work</div>
            <h2 className="section-title-landing">Latest project</h2>
          </div>
          <Link to="/projects" className="view-more-link">
            All projects →
          </Link>
        </div>

        <div className="featured-project-card landing-project-card">
          <div className="project-video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src={featuredProject.videoUrl}
              title={featuredProject.title}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="featured-project-info">
            <h3 className="featured-project-name">{featuredProject.title}</h3>
            <p className="featured-project-desc">{featuredProject.description}</p>
            <div className="featured-tech-list">
              {featuredProject.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
            <a
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-project-link"
            >
              View live project →
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="blog-section">
        <div className="showcase-header">
          <div>
            <div className="section-eyebrow">Blog</div>
            <h2 className="section-title-landing">Recent posts</h2>
          </div>
          <a
            href="https://blog.tech.tayoadegoke.com"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-link"
          >
            All posts →
          </a>
        </div>

        <div className="blog-posts-list">
          {recentBlogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-card"
            >
              <span className="blog-date">{post.date}</span>
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
