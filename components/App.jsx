import { useState } from "react";
import "../public/style.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "../src/pages/Home";
import AboutUs from "../src/pages/AboutUs";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
