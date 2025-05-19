import classNames from "classnames";
import React from "react";

function Button(props) {
  return (
    <div className="mt-2">
      <button
        className={classNames(
          "md:w-auto md:inline-block rounded-lg bg-[#3A73B7] text-white font-medium text-sm p-2",
          {
            "w-full": props.fullWidth || false,
          },
          {
            "flex items-start": props.position || false,
          }
        )}
        onClick={props.onClick}
      >
        {props.data}
      </button>
    </div>
  );
}

export default Button;
