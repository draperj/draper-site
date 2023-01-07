import React from "react";

import "./MoreAboutMe.scss";

const MoreAboutMe = () => {
  const yearsSince = () => {
    return new Date().getFullYear() - 2011;
  };
  return (
    <div className="more-about-me">
      <h1 className="header">//More about me</h1>
      <p>
        I have been an engineer for {yearsSince()} years with a focus on
        full stack web development. I enjoy working in all aspects of engineering with a passion for front-end development, devops, testing strategies and bettering code practices.
      </p>
    </div>
  );
}

export default MoreAboutMe;
