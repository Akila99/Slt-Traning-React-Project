import React from "react";

function JobCreationInputContainer(props) {
  return (
    <div className="job-creation-input-container">
      <label className="label-job-creation" htmlFor={props.for}>
        {props.labelName}
      </label>
      <input
        type="text"
        htmlFor={props.for}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        style={props.style}
      />
    </div>
  );
}
export default JobCreationInputContainer;
