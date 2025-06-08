import React from "react";
import "../public/style.css";

function Label(props) {
  return <label htmlFor={props.for}>{props.label}</label>;
}
export default Label;
