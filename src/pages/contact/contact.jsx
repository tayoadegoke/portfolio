import React from "react";
import "./contact.css";
import "../about/about.css";
function Contact() {
  return (
    <div className="page-wrapper">
      <div className="main-project-content">
        <h1 className="title">Contact</h1>

        <div className="about">
          <p>
            You can contact me via the following channels. Let's have a
            conversation 😎
          </p>
          <div className="container-div">
            <div>
              <a
                target="_blank"
                href="mailto:omotayoadegoke19@gmail.com"
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
      </div>
    </div>
  );
}

export default Contact;
