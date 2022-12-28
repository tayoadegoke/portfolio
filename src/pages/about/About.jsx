import React from "react";
import "../about/about.css";

function About() {
  const techSkills = [
    {
      tech: "Javascript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      tech: "Typescript",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZS46z5SkGjQhuLEwwkaxSHiU_aLS8jdlVx9aoiYo0oaWSHRE6&s",
    },
    {
      tech: "React",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    },
    {
      tech: "Sass",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
    },
    {
      tech: "Testing Library",
      image:
        "data:image/jpeg;base64,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",
    },
    // {
    //   tech: "Cypress",
    //   image:
    //     "https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png",
    // },
    {
      tech: "Redux",
      image:
        "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    },
    {
      tech: "Firebase",
      image:
        "https://www.gstatic.com/devrel-devsite/prod/v4b49895941ba1dd2df68fee10a0f3d4e3a71c73f4e3e8932eba1481cb318e8c2/firebase/images/lockup.svg?dcb_=0.2464704347908997",
    },
    {
      tech: "Aws",
      image:
        "//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      tech: "Node Js",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiFSw6GbHO7TbjTAXWVvB1thrvnv3zWMSQw&usqp=CAU",
    },
    {
      tech: "GraphQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
    },
    {
      tech: "Mongo Db",
      image:
        "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
    },
    {
      tech: "SQL",
      image:
        "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg",
    },
    // {
    //   tech: "Heroku",
    //   image: "",
    // },
    // {
    //   tech: "Docker",
    //   image: "",
    // },
  ];
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
            and I am also currently experimenting with mobile app development
            and cloud technologies. I have some valuable experience using the
            following technologies:
          </p>
          <div className="tech">
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
    </div>
  );
}

export default About;
