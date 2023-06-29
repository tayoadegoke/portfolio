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

  const scroll = (target) => {
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h3>
          <Link to={"/"}>T.A</Link>
        </h3>
        <img src="./hamb.png" id="hamburger" onClick={() => toggleNav()}></img>
        <ul
          className="navbar-links"
          id="links"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <a onClick={() => scroll("home")}>
            <li>Home</li>
          </a>
          <a onClick={() => scroll("about")}>
            <li>About</li>
          </a>
          <a onClick={() => scroll("projects")}>
            <li>Projects</li>
          </a>
          <a
            href={
              "https://drive.google.com/file/d/10cLTSloFTUmhlYq9ACd7cy8-RPCJ_IML/view?usp=sharing"
            }
            target="_blank"
            className="nav-item"
          >
            <li>Resume</li>
          </a>
          {/* <div className="nav-item">
            <li>Contact</li>
          </div> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
