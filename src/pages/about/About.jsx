import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
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
        <div className="navbar">
          <div className="navbar-content">
          <h3>Tayo Adegoke</h3>
          <ul>
            <li onClick={() => this.goTo("home")}>Home</li>
            <li onClick={() => this.goTo("work")}>Projects</li>
            <li onClick={() => this.goTo("home")}>Contact</li>
          </ul>
          </div>
        </div>
        <div className="main-content" id="home">
          {/* <img  src="./hamb.png" onClick={this.toggleNav}className={"hamb"}></img> */}
          <div className="bio-heading">
            <img className="profile-img" src="./gitav.jpeg"></img>
            <h3 className='bio-name'>Tayo Adegoke</h3>
            <p className='bio-headline'>Software Engineering Msc Student</p>
            <p className='bio-position'>University of Bedfordshire, Luton</p>
  
              <div className="container-div">
                <div>
                  <a
                    href="mailto: omotayoadegoke19@gmail.com"
                    rel="noopener noreferrer"
                  >
                    <img className="contactimg" src="./mail.png"></img>
                  </a>
                </div>
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
            </div>
          <div className='bio-details'>
            <h1>
              Hello there &#128512; <br /> I am{" "}
              <span className="highlight">Tayo Adegoke,</span> a {" "}
              <span className={"highlight"}>full stack web developer</span> from
              Lagos, Nigeria.{" "} I enjoy creating  <span className="highlight">web applications</span> and I use some of the  <span className="highlight">following technologies:</span>
            </h1>
            <div className='tech'>
               <div className='tech-skills'>
                    <p>React</p>
                    <img src='./react.png' width='50px' height='50px'></img>
              </div>
              <div className='tech-skills'>
                    <p>Firebase</p>
                    <img src='./firebase.png' width='50px' height='50px'></img>
              </div>
              <div className='tech-skills'>
                    <p>GraphQl</p>
                    <img src='./graphql.png' width='50px' height='50px'></img>
              </div>
              <div className='tech-skills'>
                    <p>Node JS</p>
                    <img src='./node-js.png' width='50px' height='50px'></img>
              </div>
              <div className='tech-skills'>
                    <p>Mongo DB</p>
                    <img src='./mongodb.png' width='50px' height='50px'></img>
              </div>
            </div>
            <button onClick={() => this.goTo("work")} className="btn">
              View My Projects
            </button>
          </div>
        </div>
        <div id="work">
          <div className="main-content-2">
          <h1 className="title">Projects</h1>
          <div className='projects-row'>
          <div className="bio-heading" style={{ paddingTop: "1em" }}>
              
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://social-app-7a613.web.app/"
              >
                <div className="card">
                  <h3>Twitter Clone</h3>
                  <img src="./twit.png"></img>
                </div>
              </a>
            </div>
          </div>
          </div>
           
        </div>

       
      </div>
    );
  }
}
