import React from "react";
import "../../public/style.css";
import Header from "../../components/Header";
import JobCard from "../../components/JobCard";
import jobCardInformation from "../jobCardInformation";

function Vacancies() {
  return (
    <section className="background-img">
      <Header />

      <section>
        <h1 className="heading">Find Your Job that is prefer for you</h1>
        <div className="container-wrapper">
          {jobCardInformation.map((job, index) => (
            <JobCard
              key={index}
              jobName={job.jobName}
              jobDes={job.jobDes}
              jobRequirements={job.jobRequirements}
              applyLink={job.applyLink}
              classStyleActive={job.classStyleActive}
              style={job.style}
            />
          ))}
        </div>
      </section>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <button className="vacancies-button">
          Check the Applied Job Status
        </button>
      </div>
    </section>

    // <!-- Javascipt -->
    // <script>
    //   document.querySelectorAll(".apply").forEach((link) => {
    //     link.addEventListener("click", function (event) {
    //       event.preventDefault(); // prevent default <a> behavior
    //       const jobTitle =
    //         this.closest(".container").querySelector(".jobTitle").innerText;
    //       const url = `applyForm.html?job=${encodeURIComponent(jobTitle)}`;
    //       window.location.href = url;
    //     });
    //   });
    // </script>
  );
}
export default Vacancies;
