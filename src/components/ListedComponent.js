import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/ListedComponent.scss";

const ListedComponent = ({ listedData }) => {
  const [showedListElement, setShowedListElement] = useState(null);

  return (
    <div id="listed">
      {listedData.map((listedElement, index) => {
        return (
          <div
            className="listElement"
            key={listedElement.id}
            onClick={() => {
              showedListElement !== index
                ? setShowedListElement(index)
                : setShowedListElement(null);
            }}
          >
            <div
              className={`listedTitle ${
                showedListElement === index ? "active" : ""
              }`}
            >
              {listedElement.submenu}
            </div>
            <CSSTransition
              in={showedListElement === index}
              timeout={1000}
              classNames={"element-details-"}
              appear
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <div className="row listedDetails" key={listedElement.id}>
                <div
                  className="col-xl-6 col-lg-4 listedDetailsDescription"
                  dangerouslySetInnerHTML={{
                    __html: listedElement.description,
                  }}
                ></div>
                <div className="col-xl-6 col-lg-8" key={listedElement.id}>
                  {listedElement.doctype === "pdf" ? (
                    <object
                      data={`http://77.55.194.64:8080/pdf/${listedElement.document}`}
                      width="100%"
                      height="300"
                    >
                      <a
                        href={`http://77.55.194.64:8080/pdf/${listedElement.document}`}
                      >
                        Pobierz plik
                      </a>
                    </object>
                  ) : listedElement.doctype === "yt" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: listedElement.document,
                      }}
                    ></div>
                  ) : (
                    <img
                      src={`http://77.55.194.64:8080/img/${listedElement.document}`}
                      width="100%"
                      alt={listedElement.document}
                    ></img>
                  )}
                </div>
              </div>
            </CSSTransition>
          </div>
        );
      })}
    </div>
  );
};

export default ListedComponent;
