import React from "react";
import "../public/style.css";
import { Link, useLocation } from "react-router-dom";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function NavBar() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin/");
  return (
    <nav className="nav-links">
      <Link className="links" to="/">
        Home
      </Link>

      {isAdminPage ? (
        <>
          <span className="separator">|</span>
          <Link className="links" to="/login">
            Login
          </Link>
        </>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
}

export default NavBar;
