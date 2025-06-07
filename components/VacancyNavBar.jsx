import React from "react";
import "../public/style.css";
import { Link } from "react-router-dom";

function VacancyNavBar() {
  return (
    <nav className="nav-links">
      <Link className="links" to="/vacancies/job-status">
        Job Status
      </Link>
      <span className="separator">|</span>
      <Link className="links" to="/vacancies/apply-form">
        Apply for Job
      </Link>
      <span className="separator">|</span>
      <Link className="links" to="/vacancies/services">
        Jobs for You
      </Link>
      <span className="separator">|</span>
      <Link className="links" to="/">
        Home
      </Link>
      <span className="separator">|</span>
      <Link className="links" to="/login">
        Login
      </Link>
    </nav>
  );
}

export default VacancyNavBar;
