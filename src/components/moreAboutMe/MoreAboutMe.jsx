import React, { Component } from "react";

import "./MoreAboutMe.scss";

class MoreAboutMe extends Component {
  render() {
    const yearsSince = () => {
      // birthday is a
      return new Date().getFullYear() - 2012;
    };
    return (
      <div className="more-about-me">
        <h1 className="header">//More about me</h1>
        <p>
          I have been a web developer for {yearsSince()} years with a focus on
          full stack development. I enjoy working in all aspects of a the technical stack, with a passion for front-end development and testing strategies.
          {/* I enjoy working on small and medium size teams
          in an Agile environment, working directly with the product owner. */}
        </p>
      </div>
    );
  }
}

export default MoreAboutMe;
