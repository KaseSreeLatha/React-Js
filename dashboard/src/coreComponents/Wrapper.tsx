import React from "react";

const Wrapper = (props) => {
  return (
    <div className={props.style}>
       {props.children}
    </div>
  );
};

export default Wrapper;
