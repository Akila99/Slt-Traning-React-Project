import React, { useState } from "react";
import "../../public/style.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import InputElement from "../../components/JobApplyForm-Input-Element";
import { useLocation } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

function ApplyForm() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const jobName = params.get("jobName");

  const [formData, setFormData] = useState({
    jobTittle: { jobName },
    namWithIni: "",
    fullName: "",
    gender: "",
    dob: "",
    email: "",
    contactNum: "",
    field: "",
    cvFile: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (file) => {
    setSelectedFile(file);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      jobTittle: jobName ,
      namWithIni: "",
      fullName: "",
      gender: "",
      dob: "",
      email: "",
      contactNum: "",
      field: "",
    });
    alert("Job vacancy applyed successfully!");
  };

  function handleClick() {
    console.log("Button clicked");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="background-img">
      <Header />
      <form onSubmit={handleSubmit} className="job-apply-form">
        <div className="input-element">
          <label htmlFor="job_Title">Job Title</label>
          <p className="colon">:</p>
          <p value={formData.jobTittle} id="jobDisplay">
            {jobName}
          </p>
        </div>

        <InputElement
          for="namWithIni"
          label="Name with initials"
          inputName="namWithIni"
          inputid="namWithIni"
          value={formData.namWithIni}
          onChange={handleChange}
          required
        />
        <InputElement
          for="fullName"
          label="Full Name"
          inputName="fullName"
          inputid="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <InputElement
          for="gender"
          label="Gender"
          inputName="gender"
          inputid="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <InputElement
          for="dob"
          label="Data of Birth"
          inputName="dob"
          inputid="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <InputElement
          for="email"
          label="Email"
          inputName="email"
          inputid="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputElement
          for="contactNum"
          label="Contact Number"
          inputName="contactNum"
          inputid="contactNum"
          value={formData.contactNum}
          onChange={handleChange}
          required
        />
        <InputElement
          for="field"
          label="Field"
          inputName="field"
          inputid="field"
          value={formData.field}
          onChange={handleChange}
          required
        />
        <FileUpload onFileSelect={handleFileUpload} />

        <div className="btn-container">
          <button className="vacancy-form-submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ApplyForm;
