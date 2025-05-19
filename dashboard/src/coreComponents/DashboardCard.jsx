import React from "react";

const Card = (props) => {
  return (
    <div className={props.style1}>
      <div className={props.style}>
        <div>{props.icon}</div>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Card;
