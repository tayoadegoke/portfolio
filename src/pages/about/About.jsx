import React from "react";
import "../about/about.css";

function About() {
  return (
    <div className="page-wrapper">
      <div className="main-about-content">
        <h1 className="title">About Me</h1>
        <div className="about">
          <h2>Education </h2>
          <p>
            I am a recent Msc graduate of software engineering from the
            University of Bedfordshire, United Kingdom. Before my masters, I
            completed a Bachelor of Technology degree in Electrical and
            Electronics Engineering from Bells University of Technology Ota,
            Ogun, Nigeria.
          </p>
          <h2>Work Experience</h2>
          <p>
            Previously, I worked as a software developer for two companies in
            Nigeria, where I worked on the front end of the applications mostly,
            using React. I also built some back end API'S using Node and
            Express.{" "}
          </p>

          <h2>Skills</h2>
          <p>
            I enjoy creating applications that work on the web using Javascript,
            however i am currently experimenting with mobile app development. I
            am very comfortable using the following technologies:
          </p>
          <div className="tech">
            <div className="tech-skills">
              <p>React</p>
              <img src="./react.png" width="50px" height="50px"></img>
            </div>
            <div className="tech-skills">
              <p>Firebase</p>
              <img src="./firebase.png" width="50px" height="50px"></img>
            </div>
            <div className="tech-skills">
              <p>GraphQl</p>
              <img src="./graphql.png" width="50px" height="50px"></img>
            </div>
            <div className="tech-skills">
              <p>Node JS</p>
              <img src="./node-js.png" width="50px" height="50px"></img>
            </div>
            <div className="tech-skills">
              <p>Mongo DB</p>
              <img src="./mongodb.png" width="50px" height="50px"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
