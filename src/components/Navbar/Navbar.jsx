import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  useEffect(() => {
    const navLinks = document.getElementById("links");
    if (navOpen) {
      navLinks.classList.add("stretch");
    } else {
      navLinks.classList.remove("stretch");
    }
  }, [navOpen]);
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h3>
          <Link to={"/"}>Tayo Adegoke</Link>
        </h3>
        <img src="./hamb.png" id="hamburger" onClick={() => toggleNav()}></img>
        <ul
          className="navbar-links"
          id="links"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/projects"}>
            <li>Projects</li>
          </Link>
          <a
            href={
              "https://drive.google.com/file/d/1jfiKTRCCumUM9EJM-I684VtAoPW0cWBF/view?usp=sharing"
            }
            target="_blank"
          >
            <li>Resume</li>
          </a>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
