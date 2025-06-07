import React from "react";
import "../public/style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // <nav className="nav-links">
    //   <a className="links" href="">
    //     Home
    //   </a>
    //   <span className="separator">|</span>
    //   <a className="links" href="./aboutUs.html">
    //     About us
    //   </a>
    //   <span className="separator">|</span>
    //   <a className="links" href="./vacancies.html">
    //     Vacancies
    //   </a>
    //   <span className="separator">|</span>
    //   <a className="links" href="./login.html">
    //     Login
    //   </a>
    // </nav>
    <nav className="nav-links">
      <Link className="links" to="/">
        Home
      </Link>
      <span className="separator">|</span>
      <Link className="links" to="/about-us">
        About Us
      </Link>
      <span className="separator">|</span>
      <Link className="links" to="/vacancies">
        Vacancies
      </Link>
      <span className="separator">|</span>
      <Link className="links" to="/login">
        Login
      </Link>
    </nav>
  );
}

export default NavBar;
