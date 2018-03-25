import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  render() {
    const date = () => {
      return new Date().getFullYear();
    };
    return (
      <div className="footer">
        <div className="date">©{date()} Joshua Draper</div>
      </div>
    );
  }
}

export default Footer;
