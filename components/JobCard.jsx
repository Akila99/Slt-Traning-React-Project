import React, { useEffect, useState } from "react";
import "../public/style.css";

function JobCard(props) {
  const [isClassActive, setClassActive] = useState(false);

  useEffect(() => {
    setClassActive(props.classStyleActive);
  }, [props.classStyleActive]);

  return (
    <div className="container">
      <div className="rectangle">
        <p>{props.jobName}</p>
      </div>
      <div
        className={`content ${isClassActive ? "font-size" : ""}`}
        style={props.styleContent || {}}
      >
        <p>{props.jobDes}</p>

        <div>
          <ul className="content-list">
            {props.jobRequirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <a className="apply" style={props.style || {}} href={props.applyLink}>
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default JobCard;
