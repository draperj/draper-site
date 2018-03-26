import React, { Component } from "react";

import "./MoreAboutMe.scss";

class MoreAboutMe extends Component {
  render() {
    const yearsSince = () => {
      // birthday is a
      return new Date().getFullYear() - 2012;
    };
    return (
      <div className="more-about-me corner-label">
        <p>
          I have been a web developer for {yearsSince()} years with a focus on
          full stack development. Promise to put something else informative and
          interesting here soon...
          {/* I enjoy working on small and medium size teams
          in an Agile environment, working directly with the product owner. */}
        </p>
      </div>
    );
  }
}

export default MoreAboutMe;
