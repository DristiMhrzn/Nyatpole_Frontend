import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "../CSS/landing.css";
import roboImage from "../Assets/robo.png";

import img1 from "../Assets/Nyat-Pole Photos/Home_Page/1.png";
import img2 from "../Assets/Nyat-Pole Photos/Home_Page/2.jpg";
import img3 from "../Assets/Nyat-Pole Photos/Home_Page/3.png";
import img4 from "../Assets/Nyat-Pole Photos/Home_Page/4.png";

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
          <p>
            Shaping future innovators through hands-on STEM and technology
            learning.
          </p>
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
        <div className="landing-image-card ">
          <img src={img1} alt="" />
        </div>
        <div className="landing-image-card image2">
          <img src={img2} alt="" />
        </div>
        <div className="landing-image-card ">
          <img src={img3} alt="" />
        </div>
        <div className="landing-image-card ">
          <img src={img4} alt="" />
        </div>
      </div>

      <div className="blank"></div>
    </div>
  );
};

export default Landing;
