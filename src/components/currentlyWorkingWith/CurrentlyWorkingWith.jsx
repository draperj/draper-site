import React, { Component } from "react";

import react from "../../assets/react.svg";
import angular from "../../assets/angular.svg";
import csharp from "../../assets/c-sharp.svg";
import swift from "../../assets/swift.svg";

import "./CurrentlyWorkingWith.scss";

class CurrentlyWorkingWith extends Component {
  state = {
    techstack: {
      frontend: [
        "Javascript (ES6+)",
        "React",
        "AngularJS",
        "lodash",
        "jQuery",
        "HTML5",
        "CSS3",
        "nodeJS"
      ],
      backend: [
        ".net Core",
        "ASP.net MVC",
        "EPiServer",
        ".net Web API",
        "Microsoft SQL"
      ],
      other: [
        "Agile",
        "Web Development",
        "DevOps",
        "Project Management",
        "Data Visualization"
      ]
    }
  };

  render() {
    const techList = (items, faIcon) => {
      if (items) {
        return (
          <ul class="fa-ul">
            {items.map(function(item) {
              return (
                <li>
                  <span className="fa-li">
                    <i className={"fas " + faIcon} />
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
          <img src={react} alt="React" />
          <img src={angular} alt="Angular" />
          <img src={csharp} alt="C#" />
          <img id="swift-icon" src={swift} alt="Swift" />
        </div>
        <div className="tech-stack">
          <div className="tech-col">
            <h1>Front-End</h1>
            {techList(this.state.techstack.frontend, "fa-code")}
          </div>
          <div className="tech-col">
            <h1>Back-End</h1>
            {techList(this.state.techstack.backend, "fa-code")}
          </div>
          <div className="tech-col">
            <h1>Other</h1>
            {techList(this.state.techstack.other, "fa-certificate")}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentlyWorkingWith;
