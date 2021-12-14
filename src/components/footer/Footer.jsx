import React from "react";

import "./Footer.scss";

const Footer = () => {

  const date = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer corner-label">
      <div className="date">©{date()} Joshua Draper</div>
    </div>
  );
}

export default Footer;
