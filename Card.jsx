import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgscr} alt="" />

        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <div className="card-desc">{props.desc}</div>
          <div className="card-price">{props.price}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
