import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Helloo {props.name} with age of {props.age}....!!!!
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
