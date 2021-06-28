import React, { useEffect, useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import SkillComponent from "./SkillComponent";
import PictureComponent from "./pictureComponent";
import "../styles/SkillsComponent.scss";

const SkillsComponent = ({ skillsState, selectedLanguage }) => {
  const [activePictureId, setActivePictureId] = useState(0);
  const [toggleLogoInterval, setToggleLogoInterval] = useState(false);
  const [shownSkills, setShownSkills] = useState(null);
  const [itSkillsActive, setItSkillsActive] = useState(true);
  const [picturesList, setPicturesList] = useState([]);
  let picturesLength = useRef(null);
  let activePicture = useRef(0);
  const logoLoop = useRef(null);

  useEffect(() => {
    let pictures = skillsState
      .filter((skillListItem) => skillListItem.it === itSkillsActive)
      .map((skill) => skill.logo);
    setPicturesList(pictures);

    picturesLength.current = pictures.length;
  }, [itSkillsActive]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    function changeLogoToNextOne() {
      if (activePicture.current + 1 >= picturesLength.current) {
        setActivePictureId(0);
        activePicture.current = 0;
      } else {
        setActivePictureId(activePicture.current + 1);
        activePicture.current++;
      }
    }

    logoLoop.current = setInterval(function () {
      changeLogoToNextOne();
    }, 3000);

    return () => clearInterval(logoLoop.current);
  }, [toggleLogoInterval]);

  return (
    <div className="row" id="skills">
      <div
        className={`col-6 skillSwithButton ${
          itSkillsActive ? "skillsSwitch" : ""
        }`}
        onClick={() => {
          setActivePictureId(0);
          setItSkillsActive(true);
        }}
      >
        {selectedLanguage === "polish" ? "Umiejętności IT" : "IT skills"}
      </div>
      <div
        className={`col-6 skillSwithButton ${
          !itSkillsActive ? "skillsSwitch" : ""
        }`}
        onClick={() => {
          setActivePictureId(0);
          setItSkillsActive(false);
        }}
      >
        {selectedLanguage === "polish" ? "Pozostałe" : "Other skills"}
      </div>
      <div className="col-md-8" id="listOfSkills">
        {skillsState
          .filter((skillListItem) => skillListItem.it === itSkillsActive)
          .map((skill, index) => {
            return (
              <SkillComponent
                key={skill.id}
                skill={skill}
                logoLoop={logoLoop}
                setActivePictureId={setActivePictureId}
                activePicture={activePicture.current}
                toggleLogoInterval={toggleLogoInterval}
                setToggleLogoInterval={setToggleLogoInterval}
                index={index}
                shownSkills={shownSkills}
                setShownSkills={setShownSkills}
              />
            );
          })}
      </div>
      <div className="col-md-4">
        <SwitchTransition>
          <CSSTransition
            key={activePictureId}
            timeout={1000}
            classNames={"picture-component-"}
            unmountOnExit={true}
            mountOnEnter={true}
          >
            <PictureComponent picture={picturesList[activePictureId]} />
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default SkillsComponent;
