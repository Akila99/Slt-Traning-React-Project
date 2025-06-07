import React, { useEffect, useState } from "react";
import "../public/style.css";
import NavBar from "./NavBar";
import Image from "./Image";
import CoverImage from "../src/assets/cover-img.png";
import Logo from "../src/assets/SLTMobitel_Logo.png.webp";

function Header(props) {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(props.isHomePage || false);
  }, [props.isHomePage]);

  return (
    <header
      className="header"
      style={{ backgroundColor: isHomePage ? "#0e1238" : "white" }}
    >
      <div className="navbar">
        {/* <!-- <img class="logo" src="" alt="slt logo" /> --> */}
        <div className="company-name">
          <img className="logo" src={Logo} alt="slt logo" />
          <h1 className="program-name">Traning program</h1>
        </div>
        <NavBar />
      </div>
      {isHomePage && (
        <img src={CoverImage} alt="cover image" className="cover-img" />
      )}
      {/* <Image src ={CoverImage} alt="Cover image"/> */}
    </header>
  );
}
export default Header;
