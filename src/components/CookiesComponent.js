import React from "react";
import { setCookie } from "./setCookies";
import "../styles/CookiesComponent.scss";

const CookiesComponent = ({ selectedLanguage, setShowCookiesComponent }) => {
  return (
    <div id="cookies">
      <button
        className="acceptCookiesButton"
        onClick={() => {
          setCookie(selectedLanguage);
          setShowCookiesComponent(false);
        }}
      >
        OK
      </button>

      <button
        className="acceptCookiesButton"
        onClick={() => {
          setShowCookiesComponent(false);
        }}
      >
        {selectedLanguage === "polish" ? "Anuluj" : "Cancel"}
      </button>
      {selectedLanguage === "polish" ? (
        <p>
          Ta strona korzysta z ciasteczek. Potwierdź proszę czy je akcptujesz?
        </p>
      ) : (
        <p>This site use cookies. Please confirm do you accept them?</p>
      )}
    </div>
  );
};

export default CookiesComponent;
