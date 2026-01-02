import React from "react";
import "../CSS/career.css";

const Career = () => {
  return (
    <div className="career-page">
      <div className="career-container">
        {/* Left Form Section */}
        <div className="career-form-section">
          <h2>Connect Now</h2>
          <p>Fill in the form below and join our dynamic team!</p>
          <form className="career-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" id="contact" placeholder="Enter your contact number" />
            </div>
            <div className="form-group">
              <label htmlFor="reason">Why do you want to join our team?</label>
              <textarea id="reason" placeholder="Tell us why..." rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="career-info-section">
          <h1>Join Our Team</h1>
          <h3>Let's build success together</h3>
          <p>
            At Nyatpole, we nurture creativity, innovation, and collaboration.  
            We are looking for passionate individuals who want to make a difference 
            in STEM and robotics education. Join us and be part of our journey to shape the future!
          </p>
          <ul className="benefits-list">
            <li>Work in a creative environment</li>
            <li>Career growth opportunities</li>
            <li>Collaborate with like-minded innovators</li>
            <li>Learn and grow in STEM education projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
