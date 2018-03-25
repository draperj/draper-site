import React, { Component } from "react";

import react from "../../assets/react.svg";
import angular from "../../assets/angular.svg";
import csharp from "../../assets/c-sharp.svg";
import swift from "../../assets/swift.svg";

import "./CurrentlyWorkingWith.scss";

class CurrentlyWorkingWith extends Component {
  render() {
    return (
      <div className="currently-working-with">
      <h1 className="header">Currently working with:</h1>
      <div className="logos">
        <img src={react} alt="React"/>
        <img src={angular} alt="Angular"/>
        <img src={csharp} alt="C#"/>
        <img src={swift} alt="Swift"/>
      </div>
      </div>
    );
  }
}

export default CurrentlyWorkingWith;
