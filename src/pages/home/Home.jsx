import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
  state = {
    nav: null,
  };

  goTo = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  render() {
    return (
      <div className="page-wrapper">
        <div className="main-content" id="home">
          <div className="bio-details">
            <img className="profile-img" src="./gitav.jpeg"></img>
            <h1>
              Hello there &#128512; <br /> I am{" "}
              <span className="highlight">Tayo Adegoke,</span> a{" "}
              <span className={"highlight"}>full stack developer</span> from
              Nigeria <span>🇳🇬</span> currently based in the united kingdom
              <span> 🇬🇧</span> . I enjoy creating awesome{" "}
              <span className="highlight">web applications.</span> How about
              you?
            </h1>
            <div className="container-div">
              <div>
                <a
                  target="_blank"
                  href="https://ng.linkedin.com/in/omotayo-adegoke-33a3a3120"
                  rel="noopener noreferrer"
                >
                  <img className="contactimg" src="./linkedin.png"></img>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/notthattayo"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img className="contactimg" src="./github.png"></img>
                </a>
              </div>
            </div>

            <Link to="/projects">
              {" "}
              <button className="btn">View My Projects</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
