import React from "react";
import "../../public/style.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import ReusableTable from "../../components/ReusableTabel";

function JobStatus() {
  const columns = [
    { header: "Job field", accessor: "jobField" },
    { header: "Job Position", accessor: "jobPosition" },
    { header: "Recommendation", accessor: "recommendation" },
    { header: "Status", accessor: "status" },
  ];

  const jobData = [
    {
      jobField: "Software",
      jobPosition: "QA Trainee",
      recommendation: "Approved yesterday",
      status: "Approved",
    },
    {
      jobField: "Telecommunication",
      jobPosition: "Trainee",
      recommendation: "Rejected yesterday",
      status: "Rejected",
    },
  ];

  return (
    <section class="background-img">
      <Header />
      <div class="job-status-container">
        <ReusableTable columns={columns} data={jobData} />
      </div>
    </section>
  );
}
export default JobStatus;
