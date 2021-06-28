import React from "react";
import SkillDescriptionComponent from "./SkillDescriptionComponent";
import { CSSTransition } from "react-transition-group";
import "../styles/SkillDescriptionComponent.scss";
import "../styles/SkillComponent.scss";
import { StyledSkillNameComponent } from "./StyledSkillNameComponent";
import { StyledSkillLevelComponent } from "./StyledSkillLevelComponent";

const SkillComponent = ({
  skill,
  logoLoop,
  setActivePictureId,
  setToggleLogoInterval,
  toggleLogoInterval,
  activePicture,
  index,
  shownSkills,
  setShownSkills,
}) => {
  return (
    <div
      className="row skillRow"
      onMouseOver={(e) => {
        clearInterval(logoLoop.current);
        setActivePictureId(index);
        activePicture = index;
      }}
      onMouseLeave={(e) => {
        setToggleLogoInterval(!toggleLogoInterval);
      }}
      onClick={(e) => {
        shownSkills !== index ? setShownSkills(index) : setShownSkills(null);
      }}
      key={skill.name}
    >
      <CSSTransition
        in={skill.name !== ""}
        timeout={5000}
        appear
        key={skill.id}
      >
        <StyledSkillNameComponent className="col-md-6" index={index}>
          {skill.name}
        </StyledSkillNameComponent>
      </CSSTransition>
      <div className="col-md-6 fullSkill">
        <CSSTransition
          in={skill.level !== ""}
          timeout={5000}
          appear
          key={skill.id}
        >
          <StyledSkillLevelComponent index={index} level={skill.level} />
        </CSSTransition>
      </div>
      <CSSTransition
        in={shownSkills === index}
        timeout={1000}
        classNames={"skill-description-component-"}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <SkillDescriptionComponent description={skill.description} />
      </CSSTransition>
    </div>
  );
};

export default SkillComponent;
