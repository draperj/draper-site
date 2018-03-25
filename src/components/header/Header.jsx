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
            I am a web and mobile developer based in NYC.
          </p>
          <p className="description">
            <a
              className="url-with-icon"
              href="https://www.linkedin.com/in/joshua-draper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" /> linkedin.com/in/joshua-draper/
            </a>
            <br />
            <a
              className="url-with-icon"
              href={
                "mailto:" +
                atob("ZHJhcGVyai5jdEBnbWFpbC5jb20") +
                "?subject=jdraper.com Contact"
              }
            >
              <i class="fas fa-envelope" />{" "}
              {atob("ZHJhcGVyai5jdEBnbWFpbC5jb20")}
            </a>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
