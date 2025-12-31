import React from "react";
import "../CSS/landing.css";
import roboImage from "../Assets/robo.png";

const Landing = () => {
  return (
    <div className="landing-container">

      {/* HERO / WELCOME SECTION */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Nyatpole</h1>
          <p>Shaping future innovators through hands-on STEM and technology learning.</p>
          <button className="get-started-btn">Get Started</button>
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

      <div className="yellow-section">
</div>

      {/* FOOTER */}
      <footer className="landing-footer">
        <p><strong>Location:</strong> Mid-Baneshwor</p>
        <p><strong>Contact us:</strong> 984233333 | 983025255 | 985632325</p>
        <p><strong>Email:</strong> nyatpole@gmail.com</p>
        <p>© 2025 Nyatpole. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Landing;
