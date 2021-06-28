import React, { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";
import "../styles/Menu.scss";
import "../styles/SVGAnimations.scss";

function Menu({ selectedLanguage }) {
  const [menuList, setMenuList] = useState([]);
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  useEffect(() => {
    getMenu(selectedLanguage);
  }, [selectedLanguage]);

  const getMenu = async (language) => {
    const response = await fetch("http://77.55.194.64:8080/menu_" + language);
    let data = await response.json();
    setMenuList(data);
    setTimeout(() => setDisplaySideMenu(true), 1000);
  };

  return (
    <div className="row" id="menuField">
      <MainMenu menuList={menuList} setDisplaySideMenu={setDisplaySideMenu} />
      {displaySideMenu && <SideMenu menuList={menuList} />}
    </div>
  );
}

export default Menu;
