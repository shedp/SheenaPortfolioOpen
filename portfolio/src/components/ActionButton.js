import React from "react";

const ActionButton = ({ content, shadowColor, textColor }) => {
  return (
    <button className={`actionButton ${shadowColor} ${textColor}`}>
      {content}
    </button>
  );
};

export default ActionButton;
