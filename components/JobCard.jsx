import React, { useEffect, useState } from "react";
import "../public/style.css";
import { Link } from "react-router-dom";

function JobCard(props) {
  const [isClassActive, setClassActive] = useState(false);

  useEffect(() => {
    setClassActive(props.classStyleActive);
  }, [props.classStyleActive]);

  return (
    <div className="container">
      <div className="rectangle">
        <p>{props.jobName} </p>
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
        <Link
          className="apply"
          style={props.style || {}}
          to={`${props.applyLink}?jobName=${encodeURIComponent(props.jobName)}`}
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
