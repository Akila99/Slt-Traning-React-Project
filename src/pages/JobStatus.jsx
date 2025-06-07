import React from "react";
import "../../public/style.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function JobStatus() {
  return (
    <section class="background-img">
      <Header />

      {/* <!-- <div class="job-status-container">
        <h1>Applied Job status:</h1>
        <div class="table-titles">
          <p>Job field</p>
          <p>Job Position</p>
          <p>Recommendation</p>
          <p>Status</p>
        </div>

        <div class="table-container">
          <p>Software</p>
          <p>QA Trainee</p>
          <p>Approved yesterday</p>
          <p>Approved</p>
        </div>
      </div> --> */}
      <div class="job-status-container">
        <table>
          <thead>
            <tr>
              <th>Job field</th>
              <th>Job Position</th>
              <th>Recommendation</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Software</td>
              <td>QA Trainee</td>
              <td>Approved yesterday</td>
              <td>Approved</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Telecommunication</td>
              <td>Trainee</td>
              <td>Rejected yesterday</td>
              <td>Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default JobStatus;
