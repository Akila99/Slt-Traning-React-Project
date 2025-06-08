import React, { useState } from "react";

import AdminSidePanel from "../../components/AdminSidePanel";
import { Link, useLocation } from "react-router-dom";
import InputContainer from "../../components/jobCreationInputContainer";

function JobCreationForm() {
  const [formData, setFormData] = useState({
    jobId: "",
    jobField: "",
    jobPosition: "",
    contactNumber: "",
    background: "",
    salary: "",
    dueDate: "",
    companyEmail: "",
    companyLocation: "",
    workType: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      jobId: "",
      jobField: "",
      jobPosition: "",
      contactNumber: "",
      background: "",
      salary: "",
      dueDate: "",
      companyEmail: "",
      companyLocation: "",
      workType: "",
      jobDescription: "",
    });
    alert("Job vacancy created successfully!");
  };

  return (
    <div className="jobCreation-background">
      <AdminSidePanel />

      <form onSubmit={handleSubmit} className="job-creation-form">
        <h1 style={{ marginBottom: "2rem" }}>
          Company Job Vacancy: Web Development Trainee
        </h1>

        <div className="first-row">
          <InputContainer
            for="jobId"
            labelName="Job Id:"
            name="jobId"
            id="jobId"
            value={formData.jobId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="first-row">
          <InputContainer
            for="jobField"
            labelName="Job Field:"
            name="jobField"
            id="jobField"
            value={formData.jobField}
            onChange={handleChange}
            required
          />
          <InputContainer
            for="jobPosition"
            labelName="Job Position:"
            name="jobPosition"
            id="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
            required
          />
          <InputContainer
            for="contactNumber"
            labelName="Contact Number:"
            name="contactNumber"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="first-row">
          <InputContainer
            for="background"
            labelName="Background:"
            name="background"
            id="background"
            value={formData.background}
            onChange={handleChange}
            required
          />
          <InputContainer
            for="salary"
            labelName="Salary:"
            name="salary"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
          <InputContainer
            for="dueDate"
            labelName="Due Date:"
            name="dueDate"
            id="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="first-row">
          <InputContainer
            for="companyEmail"
            labelName="Company Email:"
            name="companyEmail"
            id="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            required
          />
          <InputContainer
            for="companyLocation"
            labelName="Company Location:"
            name="companyLocation"
            id="companyLocation"
            value={formData.companyLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="first-row">
          <InputContainer
            for="workType"
            labelName="Work Type:"
            name="workType"
            id="workType"
            value={formData.workType}
            onChange={handleChange}
            required
          />
          <InputContainer
            for="jobDescription"
            labelName="Job Description:"
            name="jobDescription"
            id="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            required
            style={{ width: "40rem", height: "10rem" }}
          />
        </div>

        <button id="button-reg">Submit</button>
      </form>
    </div>
  );
}

export default JobCreationForm;
