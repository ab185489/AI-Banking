import React from "react";
import "./Smiley.scss";

const Smiley = ({ smiley }) => {
  return (
    <>
      <div className={`smiley ${smiley}`}>
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="mouth"></div>
      </div>
    </>
  );
};

export default Smiley;
