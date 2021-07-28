import React from "react";
import "./Card.scss"
function Card({ cardDetils }) {
  return (
    <div className="card">
      <div className="card-header"><h2>header value</h2></div>
      <div className="card-body">
        <h3 className="key">Key</h3>
        <h3 className="value">Value</h3>
      </div>
    </div>
  );
}

export default Card;