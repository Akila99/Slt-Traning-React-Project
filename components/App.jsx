import { useState } from "react";
import "../public/style.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "../src/pages/Home";
import AboutUs from "../src/pages/AboutUs";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Vacancies from "../src/pages/Vacancies";
import JobStatus from "../src/pages/JobStatus";
import ApplyForm from "../src/pages/ApplyForm";
import JobCreationForm from "../src/pages/JobCreation-form";
import JobModification from "../src/pages/JobModification"

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
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/vacancies/job-status" element={<JobStatus />} />
        <Route path="/vacancies/apply-form" element={<ApplyForm />} />
        <Route path="/admin/creation-form" element={<JobCreationForm />} />
        <Route path="/admin/job-modification" element={<JobModification />} />
        <Route path="/admin/received-cv" element={<JobCreationForm />} />
        <Route path="/admin/accepted-cv" element={<JobCreationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
