import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "../../components/Navbar/navbar.css";
import "./home.css";
import "aos/dist/aos.css";
import { techSkills } from "../../utils.js";

function Home() {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const navbar = document.getElementsByClassName("navbar")[0];
    const wrapper = document.getElementById("wrapper");
    const intro = document.getElementById("intro");

    body.style.backgroundColor = "black";
    body.style.height = "100vh";
    wrapper.style.visibility = "hidden";
    intro.style.color = "white";

    setTimeout(() => {
      body.style.height = "auto";
      wrapper.style.visibility = "visible";
      intro.style.display = "none";
    }, 4000);
  }, []);

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
        title.style.color = "grey";
      }
    }
  };

  Aos.init();

  return (
    <>
      <div id="intro">
        <h3>&#9203;</h3>
      </div>
      <div className="page-wrapper" id="wrapper">
        <div className="main-content" id="home">
          <div className="bio-details">
            <img
              className="profile-img"
              src="https://avatars.githubusercontent.com/u/44408277?v=4"
            ></img>
            <h1>
              Hello there &#128512; <br /> I am{" "}
              <span className="highlight">Tayo Adegoke,</span> a{" "}
              <span className={"highlight"}>full stack developer</span> from
              Nigeria <span>🇳🇬</span> currently based in the united kingdom
              <span> 🇬🇧</span> and I enjoy creating awesome{" "}
              <span className="highlight">web applications.</span> How about
              you?
            </h1>
            <div className="container-div">
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/omotayo-a-33a3a3120/"
                  rel="noopener noreferrer"
                >
                  <img className="contactimg" src="./linkedin.png"></img>
                </a>
              </div>
              <div>
                <a
                  href="mailto:omotayoadegoke19@gmail.com"
                  rel="noopener noreferrer"
                >
                  <img className="contactimg" src="./mail.png"></img>
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

            <a
              href="https://drive.google.com/file/d/1jfiKTRCCumUM9EJM-I684VtAoPW0cWBF/view?usp=sharing"
              target={"_blank"}
            >
              {" "}
              <button className="btn">View My Resume</button>
            </a>
          </div>
        </div>

        <div className="main-content-2" id="about">
          <h1 className="title" data-aos="fade-up">
            About Me
          </h1>
          <div className="about" data-aos="fade-up">
            <p>
              I enjoy creating applications that work on the web using
              Javascript, and I am also currently experimenting with c# for .NET
              development as well as Azure for cloud technologies.
            </p>
            <p>
              Previously, I worked as a full stack developer for two companies,
              where I mostly worked on the front end of the applications using
              React and Typescript. I also built some back end API'S using
              NodeJs and Express.{" "}
            </p>

            <p>
              I have some valuable experience using the following technologies:
            </p>
            <div className="tech" data-aos="fade-up">
              {techSkills.map((skill) => {
                return (
                  <div className="tech-skills">
                    <p>{skill.tech}</p>
                    <img src={skill.image} width="50px" height="50px"></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="main-content-2" id="projects">
          <h1 className="title" data-aos="fade-up">
            Projects
          </h1>

          <div className="projects-row" data-aos="fade-up">
            <div
              className="project-card-heading"
              onMouseEnter={() => flipCard("enter", "sms-portal")}
              onMouseLeave={() => flipCard("leave", "sms-portal")}
            >
              <div className="card">
                <h3 id="sms-portal-head">Sms Portal</h3>
                <img
                  src="https://res.cloudinary.com/notthattayo/image/upload/v1672216858/Screen_Shot_2022-12-28_at_8.40.31_AM.png"
                  id="sms-portal-img"
                ></img>
                <div className="card-details" id="sms-portal-details">
                  <p>
                    <span>About : </span> An SMS portal for internal staff of a
                    company to communicate with external clients via Sms.
                  </p>
                  <p>
                    <span>Tech Stack: </span> React, NodeJs, React-Redux, React
                    Router, Express, Socket.io, MongoDb and Twilio Api{" "}
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://heartfelt-bombolone-9b4a01.netlify.app/"
                  >
                    {" "}
                    <button>View Application</button>{" "}
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/notthattayo/netflix-review"
                  >
                    {" "}
                    <button>Github</button>{" "}
                  </a>
                </div>
              </div>
            </div>
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
                    <span>About : </span> An application to review netflix
                    movies and watch movie trailers
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/notthattayo/netflix-review"
                  >
                    {" "}
                    <button>Github</button>{" "}
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/notthattayo/react-twitter-clone"
                  >
                    {" "}
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
