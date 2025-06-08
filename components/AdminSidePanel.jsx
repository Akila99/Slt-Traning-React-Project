import React from "react";
import "../public/style.css";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import AdminSideBarOption from "./AdminSideBarOption";

function AdminSidePanel(props) {
  return (
    <div className="job-creation-side-bar">
      <Header />
      <div className="side-bar-options">
        <AdminSideBarOption
          sideBarLink="/admin/creation-form"
          sideBarTittle="Job Creation"
        />
        <AdminSideBarOption
          sideBarLink="/admin/job-modification"
          sideBarTittle="Job Modification"
        />
        <AdminSideBarOption
          sideBarLink="/admin/received-cv"
          sideBarTittle="Received CVs"
        />
        <AdminSideBarOption
          sideBarLink="/admin/accepted-cv"
          sideBarTittle="Accepted CVs"
        />
      </div>
    </div>
  );
}
export default AdminSidePanel;
