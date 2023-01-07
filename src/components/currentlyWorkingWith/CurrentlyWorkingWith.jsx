import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCertificate } from '@fortawesome/free-solid-svg-icons'

import react from "../../assets/react.svg";
import angular from "../../assets/angular.svg";
import csharp from "../../assets/c-sharp.svg";
import swift from "../../assets/swift.svg";
import graphql from "../../assets/graphql.svg";

import "./CurrentlyWorkingWith.scss";

const CurrentlyWorkingWith = () => {
  const [details] = useState({
    techstack: {
      frontend: [
        "Typescript",
        "Javascript (ES6+)",
        "React",
        "Angular",
        "lodash",
        "jQuery",
        "HTML5",
        "CSS3",
        "nodeJS",
        "Electron",
        "Swift"
      ],
      backend: [
        "GraphQL",
        "node",
        ".net Core",
        "ASP.net MVC",
        "EPiServer",
        ".net Web API",
        "Microsoft SQL"
      ],
      other: [
        "Web Development",
        "Automated Testing Strategies",
        "Real Time Data",
        "Agile",
        "DevOps",
        "Project Management",
        "AWS",
        "Azure",
        "Data Visualization",
      ]
    }
  });

  const techList = (items, faIcon) => {
    if (items) {
      return (
        <ul className="fa-ul">
          {items.map((item) => {
            return (
              <li key={item}>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faIcon} />
                </span>{" "}
                {item}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="currently-working-with">
      <h1 className="header">{"<Currently working with />"}</h1>
      <div className="logos">
        <img id="react-icon" src={react} alt="React" />
        <img id="gql-icon" src={graphql} alt="GraphQL" />
        <img id="angular-icon" src={angular} alt="Angular" />
        <img id="csharp-icon" src={csharp} alt="C#" />
        <img id="swift-icon" src={swift} alt="Swift" />
      </div>
      <div className="tech-stack">
        <div className="tech-col">
          <h1>Front-End</h1>
          {techList(details.techstack.frontend, faCode)}
        </div>
        <div className="tech-col">
          <h1>Back-End</h1>
          {techList(details.techstack.backend, faCode)}
        </div>
        <div className="tech-col">
          <h1>Other</h1>
          {techList(details.techstack.other, faCertificate)}
        </div>
      </div>
    </div>
  );
}

export default CurrentlyWorkingWith;
