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
        I have been a developer for {yearsSince()} years with a focus on
        full stack web development. I enjoy working in all aspects of the technical stack, with a passion for front-end development, testing strategies and bettering code practices.
        {/* I enjoy working on small and medium size teams
          in an Agile environment, working directly with the product owner. */}
      </p>
    </div>
  );
}

export default MoreAboutMe;
