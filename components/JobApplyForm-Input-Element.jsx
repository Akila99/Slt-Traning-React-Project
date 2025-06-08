import React from "react";
import "../public/style.css";
import { Link } from "react-router-dom";
import Label from "./Label";
import Input from "../components/Login-input-text";

function JobApplyFormInputElement(props) {
  return (
    <div className="input-element">
      <Label for={props.for} label={props.label} />
      <p className="colon">:</p>
      <Input
        name={props.inputName}
        id={props.inputid}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
}
export default JobApplyFormInputElement;
