import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeNav}>
          <span className="logo-text">T.A</span>
        </Link>

        <button
          className={`hamburger ${navOpen ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${navOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeNav}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={closeNav}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link ${isActive("/projects") ? "active" : ""}`}
              onClick={closeNav}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={closeNav}
            >
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
