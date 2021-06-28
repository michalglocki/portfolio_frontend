import React from "react";
import "../styles/MenuComponent.scss";
import { Link } from "react-router-dom";

function MenuComponent({ filteredMenuItem, keyValue }) {
  return (
    <div className="pb-3 menu p-5 mb-5">
      <Link to={`/details/${keyValue}`}>
        <div className="title">{filteredMenuItem.title}</div>
        <div
          className="svgField"
          dangerouslySetInnerHTML={{ __html: filteredMenuItem.graphic }}
        ></div>
        {/* <img
          className="menuPicture"
          src={"http://localhost:8080/img/menu/" + filteredMenuItem.graphic}
          alt="menu item"
        ></img> */}
      </Link>
    </div>
  );
}

export default MenuComponent;
