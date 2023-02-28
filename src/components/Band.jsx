import React from "react";
import "./Band.css";

const Band = (props) => {
  return (
    <div className="band-card">
      <img className="img" src={props.image} />
      <h3>{props.name}</h3>
      <a href={props.link} target="_blank">
        <button>Get Tickets</button>
      </a>
    </div>
  );
};

export default Band;
