import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(prev => (prev ? y > 20 : y > 50));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const isOnDark = location.pathname === "/contact";

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isOnDark ? "on-dark" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">Tayo<span>.</span></span>
        </Link>

        <button
          className={`hamburger ${navOpen ? "active" : ""}`}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${navOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1TBhT1nQBJwLo5g-WjzkjRPyFErhcvkvd/view"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link resume-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
