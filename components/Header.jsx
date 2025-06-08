import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../public/style.css";
import NavBar from "./NavBar";
import Image from "./Image";
import CoverImage from "../src/assets/cover-img.png";
import Logo from "../src/assets/SLTMobitel_Logo.png.webp";
import VacancyNavBar from "./VacancyNavBar";

function Header(props) {
  const location = useLocation();
  const isVacancyPage =
    location.pathname === "/vacancies" ||
    location.pathname.startsWith("/vacancies/");
  const isHomePage = location.pathname === "/";
  const isAdminPage = location.pathname.startsWith("/admin/");

  return (
    <header
      className="header"
      style={
        !isAdminPage && !isVacancyPage
          ? { backgroundColor: isHomePage ? "#0e1238" : "white" }
          : undefined
      }
    >
      <div className="navbar">
        <div className="company-name">
          <img className="logo" src={Logo} alt="slt logo" />
          <h1 className="program-name">Traning program</h1>
        </div>
        {isVacancyPage ? <VacancyNavBar /> : <NavBar />}
      </div>
      {isHomePage && (
        <img src={CoverImage} alt="cover image" className="cover-img" />
      )}
    </header>
  );
}
export default Header;
