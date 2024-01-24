import React, { useEffect, useState } from "react";
import Aos from "aos";
import "../../components/Navbar/navbar.css";
import "./home.css";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { techSkills } from "../../utils.js";
import { faVcard } from "@fortawesome/free-regular-svg-icons";

function Home() {

  const [selectedSection, setSelectedSection] = useState('home')
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const wrapper = document.getElementById("wrapper");
    const intro = document.getElementById("intro");

    body.style.backgroundColor = "black";
    body.style.height = "100vh";
    //wrapper.style.visibility = "hidden";
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
        title.style.opacity = 1;
      } else {
        console.log("mouse out");
        cardImg.style.display = "block";
        cardDetails.style.display = "none";
        title.style.opacity = 0.5;
      }
    }
  };

  Aos.init();

  return (
    <>
      <div id="intro">
        <h3>T.A </h3>
      </div>
      <div className="page-wrapper" id="wrapper">
        <div className="main-content" id="home">
          <div className="bio-details">
            <div className="rotating-nav-container">
              <ul className="rotating-nav">
                <li onClick={() => setSelectedSection('home')} className={`${selectedSection === 'home' && 'active'}`}><FontAwesomeIcon icon={faHome} /></li>
                <li onClick={() => setSelectedSection('about')} className={`${selectedSection === 'about' && 'active'}`}><FontAwesomeIcon icon={faUser} /></li>
                <li onClick={() => setSelectedSection('projects')} className={`${selectedSection === 'projects' && 'active'}`}><FontAwesomeIcon icon={faCode} /></li>
                <li onClick={() => window.open("https://drive.google.com/file/d/1suH9iDeNlPBuSu1DRjQ4-eihzGJ46ko_/view?usp=drive_link", "_blank")}><FontAwesomeIcon icon={faVcard} /></li>
              </ul>
              <img
                className="profile-img"
                src="https://avatars.githubusercontent.com/u/44408277?v=4"
              ></img>
            </div>

          </div>


          <div className="bio-details top-content">
            {selectedSection === 'home' &&
              <>
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
                      href="https://github.com/tayoadegoke"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img className="contactimg" src="./github.png"></img>
                    </a>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1suH9iDeNlPBuSu1DRjQ4-eihzGJ46ko_/view?usp=drive_link"
                  target={"_blank"}
                >
                  {" "}
                  <button className="btn">View My Resume</button>
                </a>
              </>
            }
            {selectedSection === 'about' &&
              <div className="main-content-2" id="about">
                <h1 className="title" data-aos="fade-up">
                  About Me
                </h1>
                <div className="about" data-aos="fade-up">
                  <p>
                    Over the past 4 years, I have been involved in building
                    scalable web applications using Javascript, and I am also
                    currently experimenting with c# for .NET development, as well as Aws and
                    Azure for cloud technologies.
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
                  <div className="contact_row"></div>
                  <button className="btn" style={{ marginBottom: '1em' }} onClick={() => setSelectedSection('projects')}>View My Projects</button>
                </div>
              </div>
            }
            {selectedSection === 'projects' &&
              <>



                <div className="main-content-2" id="projects">
                  <h1 className="title" data-aos="fade-up">
                    Projects
                  </h1>

                  <div className="projects-row" data-aos="fade-up">
                    {/*project one*/}
                    <div
                      className="project-card-heading"
                      onMouseEnter={() => flipCard("enter", "netflix-review")}
                      onMouseLeave={() => flipCard("leave", "netflix-review")}
                    >
                      <div className="card" data-aos="flip-right">
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
                        <h3 id="twitter-clone-head">Sample UI Build</h3>
                        <img
                          src="https://res.cloudinary.com/notthattayo/image/upload/v1698180270/samplePage.png"
                          id="twitter-clone-img"
                        ></img>
                        <div className="card-details" id="twitter-clone-details">
                          <p>
                            <span>About : </span> A sample page based on a given design image. Note that no other assets were provided for this implementation apart from the image. click <a href="https://drive.google.com/file/d/1xQhvv3Qjqpk8fiycD5u0YdjPzCQnWJdJ/view" target="_blank" style={{ color: 'pink' }}>here</a> to view design.
                          </p>
                          <p>
                            <span>Tech Stack: </span> React, Css, Framer Motion
                          </p>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://tayoadegoke.github.io/onlycoders-samplepage/"
                          >
                            {" "}
                            <button>View Application</button>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://github.com/tayoadegoke/onlycoders-samplepage"
                            >
                              {" "}
                              <button>Github</button>{" "}
                            </a>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/*project three*/}

                    <div
                      className="project-card-heading"
                      onMouseEnter={() => flipCard("enter", "bugzy")}
                      onMouseLeave={() => flipCard("leave", "bugzy")}
                    >
                      <div className="card">
                        <h3 id="bugzy-head">Bugzy Music Player</h3>

                        <img
                          src="https://res.cloudinary.com/notthattayo/image/upload/v1689076789/Screen_Shot_2023-07-11_at_12.59.24_PM.png"
                          id="bugzy-img"
                          style={{ objectFit: "contain", height: "100%" }}
                        ></img>

                        <div className="card-details" id="bugzy-details">
                          <p>
                            <span>About : </span> A Simple music player application that
                            allows users listen to Bugzy Malone songs. It shows the song
                            duration, and allows for increasing and decreasing volume
                            outputs, fast forward and rewind functionality, Next and
                            previous song fuctionality, pause and play functionality.
                          </p>
                          <p>
                            <span>Tech Stack: </span> HTML, CSS, Javascript
                          </p>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://tayoadegoke.github.io/Bugzymusicplayer/"
                          >
                            {" "}
                            <button>View Application</button>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://github.com/tayoadegoke/Bugzymusicplayer"
                            >
                              {" "}
                              <button>Github</button>{" "}
                            </a>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_row">
                    <button
                      // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      onClick={() => setSelectedSection('home')}
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </>
            }
          </div>

        </div>

      </div>

    </>
  );
}

export default Home;
