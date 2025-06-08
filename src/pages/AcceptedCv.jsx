import React, { useState } from "react";
import AdminSidePanel from "../../components/AdminSidePanel";
import SearchBar from "../../components/SearchBar";
import { Link, useLocation } from "react-router-dom";
import ReusableTable from "../../components/ReusableTabel";
import applicantData from "../ApplicationData";

function AcceptedCv() {
  const applicantColumns = [
    { header: "Job Title", accessor: "jobTitle" },
    { header: "Name", accessor: "name" },
    { header: "Gender", accessor: "gender" },
    { header: "Field", accessor: "field" },
    { header: "Contact Number", accessor: "contactNumber" },
    { header: "CV", accessor: "cv" },
  ];
  return (
    <section className="admin-background-image">
      <div className="admin-background">
        <AdminSidePanel />
        <div className="recieved-cv-container">
          <h1>Accepted CVs</h1>
          <div className="recieved-cv-table">
            <ReusableTable columns={applicantColumns} data={applicantData} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AcceptedCv;
