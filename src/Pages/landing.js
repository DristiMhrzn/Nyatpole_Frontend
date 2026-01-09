import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "../CSS/landing.css";
import roboImage from "../Assets/robo.png";

const Landing = () => {
  const navigate = useNavigate(); // <-- create navigate function

  const handleGetStarted = () => {
    navigate("/about"); // <-- route to AboutUs page
  };

  return (
    <div className="landing-container">

      {/* HERO / WELCOME SECTION */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Nyat-pole</h1>
          <p>Shaping future innovators through hands-on STEM and technology learning.</p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        {/* POP-UP CARD WITH IMAGE */}
        <div className="hero-image-card">
          <img src={roboImage} alt="Robotics" />
        </div>
      </div>

      {/* IMAGE SHOWCASE SECTION */}
      <div className="landing-images">
        <div className="landing-image-card image1"></div>
        <div className="landing-image-card image2"></div>
        <div className="landing-image-card image3"></div>
        <div className="landing-image-card image4"></div>
      </div>

      <div className="blank"></div>

    </div>
  );
};

export default Landing;
