import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import portrait from "../../assets/jdraper.png";
import "./Header.scss";

const Header = () => {
  const base64Mail = decodeURIComponent(window.atob("ZHJhcGVyai5jdEBnbWFpbC5jb20"))

  return (
    <header className="header-c">
      <img src={portrait} className="portrait" alt="Joshua Draper" />
      <div className="header-intro">
        <h1 className="title">Hello world, this is Joshua Draper.</h1>
        <p className="description">
          Lead engineer based in Connecticut.
        </p>
        <p className="description">
          <a
            className="url-with-icon"
            href="https://www.linkedin.com/in/joshua-draper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />linkedin.com/in/joshua-draper/
          </a>
          <br />
          <a
            className="url-with-icon"
            href={
              `mailto:${base64Mail}?subject=jdraper.me Contact`
            }
          >
            <FontAwesomeIcon icon={faEnvelope} />{base64Mail}
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
