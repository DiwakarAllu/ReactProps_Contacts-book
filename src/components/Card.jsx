import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h1 className="name">{props.name}</h1>
        <Avatar imgURL={props.img}></Avatar>
      </div>
      <div className="bottom">
        <Details data={props.phone} />
        <Details data={props.email} />
      </div>
    </div>
  );
}

export default Card;
