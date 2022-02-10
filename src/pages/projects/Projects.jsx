import React from "react";
import { Modal } from "react-bootstrap";
import "../home/home.css";
import "./projects.css";

function Projects() {
  const flipCard = (action, id) => {
    if (window.screen.width > 1024) {
      let title = document.getElementById(id + "-head");
      let cardImg = document.getElementById(id + "-img");
      let cardDetails = document.getElementById(id + "-details");
      if (action === "enter") {
        console.log("mousein");
        cardImg.style.display = "none";
        cardDetails.style.display = "block";
        title.style.color = "white";
      } else {
        console.log("mouse out");
        cardImg.style.display = "block";
        cardDetails.style.display = "none";
        title.style.color = "#222733";
      }
    }
  };

  return (
    <div className="page-wrapper">
      <div className="main-project-content">
        <h1>My Projects </h1>
        <div className="projects-row">
          <div
            className="project-card-heading"
            onMouseEnter={() => flipCard("enter", "netflix-review")}
            onMouseLeave={() => flipCard("leave", "netflix-review")}
          >
            <div className="card">
              <h3 id="netflix-review-head">Netflix Review</h3>
              <img
                src="https://res.cloudinary.com/notthattayo/image/upload/v1643374787/netflix.png"
                id="netflix-review-img"
              ></img>
              <div className="card-details" id="netflix-review-details">
                <p>
                  <span>About : </span> An application to review netflix movies
                  and watch movie trailers
                </p>
                <p>
                  <span>Tech Stack: </span> React , Material UI, NodeJs ,
                  Express, MongoDb and Firebase{" "}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://netflix-review-a96cf.web.app/"
                >
                  {" "}
                  <button>View Application</button>{" "}
                </a>
              </div>
            </div>
          </div>
          <div
            className="project-card-heading"
            onMouseEnter={() => flipCard("enter", "twitter-clone")}
            onMouseLeave={() => flipCard("leave", "twitter-clone")}
          >
            <div className="card">
              <h3 id="twitter-clone-head">Twitter Clone</h3>
              <img
                src="https://res.cloudinary.com/notthattayo/image/upload/v1643374838/twit.png"
                id="twitter-clone-img"
              ></img>
              <div className="card-details" id="twitter-clone-details">
                <p>
                  <span>About : </span> A Simple Twitter clone with Minimal
                  Functionality.
                </p>
                <p>
                  <span>Tech Stack: </span> React , Material UI, and Firebase
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://social-app-7a613.web.app/"
                >
                  {" "}
                  <button>View Application</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
