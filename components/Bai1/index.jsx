import React from "react";
import "./styles.css";

const Bai1 = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-name">{props.name}</div>
      <div className="card-class">{props.class}</div>
      <div className="card-blabla">{props.blabla}</div>
    </div>
  );
};

export default Bai1;