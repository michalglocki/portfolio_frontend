import "./App.scss";
import UpperbarComponent from "./components/UpperbarComponent";
import Menu from "./components/Menu";
import Details from "./components/Details";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CookiesComponent from "./components/CookiesComponent";
import { getCookie } from "./components/setCookies";
import { CSSTransition } from "react-transition-group";

function App() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [showCookiesComponent, setShowCookiesComponent] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("polish");
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    if (getCookie() === "") {
      setShowCookiesComponent(true);
    } else {
      setSelectedLanguage(getCookie());
      setAcceptedCookies(true);
    }
    setReadyToRender(true);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <UpperbarComponent
            setSelectedLanguage={setSelectedLanguage}
            acceptedCookies={acceptedCookies}
          />
        </header>
        {readyToRender && (
          <div className="container">
            <Route
              path="/"
              exact
              render={(props) => (
                <Menu {...props} selectedLanguage={selectedLanguage} />
              )}
            />
            <Route
              path="/details/:id"
              render={(props) => (
                <Details {...props} selectedLanguage={selectedLanguage} />
              )}
            />
          </div>
        )}
        <CSSTransition
          in={showCookiesComponent}
          timeout={1000}
          classNames={"cookies-"}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <CookiesComponent
            selectedLanguage={selectedLanguage}
            setShowCookiesComponent={setShowCookiesComponent}
          />
        </CSSTransition>
      </div>
    </Router>
  );
}

export default App;
