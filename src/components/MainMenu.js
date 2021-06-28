import React from "react";
import MenuComponent from "./MenuComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/mainMenu.scss";
import { StyledMenuComponent } from "./StyledMenuCompopnent";

function MainMenu(props) {
  return (
    <div className="col-md-9" id="mainMenu">
      <div className="row">
        <TransitionGroup component={null}>
          {props.menuList
            .filter((menuItem) => menuItem.level === 1)
            .map((filteredMenuItem, index) => (
              <CSSTransition
                key={filteredMenuItem.idmenu}
                timeout={index * 200 + 1000}
                appear
              >
                <StyledMenuComponent className="col-sm-6" index={index}>
                  <MenuComponent
                    filteredMenuItem={filteredMenuItem}
                    key={filteredMenuItem.idmenu}
                    keyValue={filteredMenuItem.idmenu}
                  />
                </StyledMenuComponent>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default MainMenu;
