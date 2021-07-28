import React from "react";
import "./Card.scss"
function Card({ card  = [] }) {
  console.log("value of card is",card)
  return (
    <div className="card">
      <div className="card-header"><h2>{card[0]?.value}</h2></div>
      <div className="card-body">
        {card.map((data,i)=>{
          if(i===0){return  <></>}
          else{return(<div><h3 className="key" key={`key${i}`}>{data.key}</h3>
          <h3 className="value" key={`value${i}`}>{data.value}</h3></div>)}
        })}
      </div>
    </div>
  );
}
export  default Card