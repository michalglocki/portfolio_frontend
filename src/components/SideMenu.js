import React from "react";
import MenuComponent from "./MenuComponent";
import { StyledMenuComponent } from "./StyledMenuCompopnent";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function SideMenu(props) {
  return (
    <div className="col-md-3" id="sideMenu">
      <div className="row">
        <TransitionGroup component={null}>
          {props.menuList
            .filter((menuItem) => menuItem.level === 2)
            .map((filteredMenuItem, index) => (
              <CSSTransition
                key={filteredMenuItem.idmenu}
                timeout={index * 200 + 5000}
                appear
              >
                <StyledMenuComponent className="col-sm-12" index={index}>
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

export default SideMenu;
