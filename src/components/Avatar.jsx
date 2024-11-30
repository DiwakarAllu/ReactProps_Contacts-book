import React from "react";

function Avatar(props) {
  return (
    <div>
      <img className="circle-img " src={props.imgURL} alt="Avatar_pic" />
    </div>
  );
}
export default Avatar;
