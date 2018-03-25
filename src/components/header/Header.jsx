import React, { Component } from "react";
import portrait from "../../assets/jdraper.png";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header-c">
        <img src={portrait} className="portrait" alt="Joshua Draper" />
        <div className="header-intro">
          <h1 className="title">Hello world, this is Joshua Draper.</h1>
          <p className="description">
            I am a developer focused on web and mobile applications.
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
