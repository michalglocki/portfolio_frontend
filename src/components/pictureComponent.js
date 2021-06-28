import React from "react";

function PictureComponent(props) {
  return (
    <div>
      <img
        src={`http://77.55.194.64:8080/img/skills/${props.picture}`}
        alt="alt"
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default PictureComponent;
