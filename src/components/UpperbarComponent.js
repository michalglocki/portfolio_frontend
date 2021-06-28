import React from "react";
import "../styles/UpperbarComponent.scss";
import MRG from "../resources/img/MRG.png";
import polish from "../resources/img/polish.png";
import english from "../resources/img/english.png";
import { setCookie } from "./setCookies";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function UpperbarComponent({ setSelectedLanguage, acceptedCookies }) {
  return (
    <div id="upperbar">
      <div id="logo" className="upperbarElement">
        <Link to="/">
          <img id="logoPicture" src={MRG} alt="moje logo" />
        </Link>
      </div>

      <div className="language upperbarElement">
        <img
          id="polish"
          src={polish}
          alt="polska flaga"
          onClick={() => {
            setSelectedLanguage("polish");
            acceptedCookies && setCookie("polish");
          }}
        ></img>
      </div>

      <div className="language upperbarElement">
        <img
          id="english"
          src={english}
          alt="english flag"
          onClick={() => {
            setSelectedLanguage("english");
            acceptedCookies && setCookie("english");
          }}
        ></img>
      </div>

      <div className="upperbarElement">
        <a
          href="https://github.com/michalglocki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGitSquare size="60px" />
        </a>
      </div>
      <div className="upperbarElement">
        <a
          href="https://www.linkedin.com/in/micha%C5%82-g%C5%82ocki-67738a95/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="60px" />
        </a>
      </div>
    </div>
  );
}

export default UpperbarComponent;
