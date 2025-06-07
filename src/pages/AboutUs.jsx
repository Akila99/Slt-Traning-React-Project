import React from "react";
import "../../public/style.css";
import Header from "../../components/Header";
// import AboutUs from "../assets/aboutUs.png";
import aboutUs from "../assets/aboutUs.png";

function AboutUs() {
  return (
    <div>
      <Header />
      <section class="about-container">
        <div class="coulm-container">
          <h1>About Us</h1>
          <p>
            "Welcome to [Your Company Name], where innovation meets passion.
            Established with a commitment to [briefly mention your mission or
            purpose], we strive to [highlight key values or goals]. Our
            dedicated team of [mention your team's expertise] is driven by a
            shared vision: [describe the overarching goal or impact]. At [Your
            Company Name], we believe in [mention any unique approach or
            philosophy]. Join us on this exciting journey as we [briefly
            describe what sets your company apart]."
          </p>
          <button>Learn More</button>
        </div>
        <div>
          <img src={aboutUs} alt="about us image" class="about-img" />
        </div>
      </section>
    </div>
  );
}
export default AboutUs;
