import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Details.scss";
import SkillsComponent from "./SkillsComponent";
import ListedComponent from "./ListedComponent";
import { ImArrowLeft } from "react-icons/im";
import { CSSTransition } from "react-transition-group";
import ExternalComponent from "./ExternalComponent";

function Details({ match, selectedLanguage }) {
  const [detailsObject, setDetailsObject] = useState([]);
  const [listedData, setListedData] = useState([]);
  const [skillsState, setSkillsState] = useState([]);
  const [skillsPresent, setSkillsPresent] = useState(false);
  const [listedPresent, setListedPresent] = useState(false);
  const [externalPresent, setExternalPresent] = useState(false);
  const [externalData, setExternalData] = useState(false);
  const [displayDetails, setDisplayDetails] = useState(false);

  useEffect(() => {
    getDetails();
  }, [selectedLanguage]); // eslint-disable-line react-hooks/exhaustive-deps

  const getDetails = async () => {
    const response = await fetch(
      `http://77.55.194.64:8080/details_${selectedLanguage}?id=${match.params.id}`
    );
    let data = await response.json();
    let listed = data.listed;
    let skills = data.skills;
    let externalSource = data.external;

    if (listed !== undefined && listed.length > 0) {
      setListedData(listed);
      setListedPresent(true);
    } else {
      setListedPresent(false);
    }

    if (skills !== undefined && skills.length > 0) {
      setSkillsState(skills);
      setSkillsPresent(true);
    } else {
      setSkillsPresent(false);
    }

    if (externalSource !== null) {
      const externalAPIresponse = await fetch(externalSource);
      let externalData = await externalAPIresponse.json();
      setExternalData(externalData);
      setExternalPresent(true);
    } else {
      setExternalPresent(false);
    }

    setDetailsObject(data);
    setDisplayDetails(true);
  };

  return (
    <CSSTransition
      in={displayDetails}
      appear
      timeout={1000}
      classNames={"details-animation-"}
      mountOnEnter={true}
    >
      <div>
        <div className="row">
          <div id="title" className="col-9">
            <h2>{detailsObject.title}</h2>
          </div>
          <Link
            to="/"
            className="col-3"
            onClick={() => {
              setDisplayDetails(false);
            }}
          >
            <p>
              <ImArrowLeft size="30px" />
              {selectedLanguage === "polish" ? " powrót" : " back"}
            </p>
          </Link>
        </div>
        <div
          id={
            listedPresent
              ? "description"
              : skillsPresent
              ? "description"
              : "long_description"
          }
          dangerouslySetInnerHTML={{ __html: detailsObject.description }}
        ></div>

        {listedPresent && <ListedComponent listedData={listedData} />}
        {skillsPresent && (
          <SkillsComponent
            skillsState={skillsState}
            selectedLanguage={selectedLanguage}
          />
        )}
        {externalPresent && <ExternalComponent externalData={externalData} />}
      </div>
    </CSSTransition>
  );
}

export default Details;
