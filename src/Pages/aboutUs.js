import React, { useEffect } from "react";
import "../CSS/about-us.css";

// GALLERY IMAGES
import work1 from "../Assets/work1.jpg";
import work2 from "../Assets/work2.jpg";
import work3 from "../Assets/work3.jpg";
import work4 from "../Assets/work4.jpg";
import work5 from "../Assets/work5.jpg";
import work6 from "../Assets/work6.jpg";

import lia1 from "../Assets/Nyat-Pole Photos/About us/Learning in action/a.jpg";
import lia2 from "../Assets/Nyat-Pole Photos/About us/Learning in action/b.jpg";
import lia3 from "../Assets/Nyat-Pole Photos/About us/Learning in action/cc.jpg";
import lia4 from "../Assets/Nyat-Pole Photos/About us/Learning in action/dd.jpg";
import lia5 from "../Assets/Nyat-Pole Photos/About us/Learning in action/ee.jpg";
import lia6 from "../Assets/Nyat-Pole Photos/About us/Learning in action/ff.jpg";
import lia7 from "../Assets/Nyat-Pole Photos/About us/Learning in action/gg.jpg";
import lia8 from "../Assets/Nyat-Pole Photos/About us/Learning in action/hh.jpg";

const AboutUs = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".gallery-card, .team-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Nyatpole</h1>
        <p>Inspiring innovation through STEM & Robotics education</p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            <strong>Nyatpole</strong> is a STEM and robotics-focused education
            company that collaborates with schools to provide hands-on learning
            experiences in robotics, coding, electronics, and emerging
            technologies.
          </p>
          <p>
            We believe learning should be interactive, practical, and creative.
            Our programs help students build confidence, critical thinking, and
            real-world problem-solving skills for a technology-driven future.
          </p>
        </div>

        <div className="image-placeholder">
          <span>Future Image Space</span>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <h2>Learning in Action</h2>

        <div className="gallery-grid">
          {/* Card 1 */}
          <div className="gallery-card">
            <div className="gallery-slider">
              <img src={work1} alt="Activity 1" />
              <img src={work2} alt="Activity 2" />
              <img src={work3} alt="Activity 3" />
              <img src={lia1} alt="Activity 4" />
              <img src={lia2} alt="Activity 5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="gallery-card">
            <div className="gallery-slider">
              <img src={work4} alt="Activity 4" />
              <img src={work5} alt="Activity 5" />
              <img src={work6} alt="Activity 6" />
              <img src={lia3} alt="Activity 7" />
              <img src={lia4} alt="Activity 8" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="gallery-card">
            <div className="gallery-slider">
              <img src={work1} alt="Activity 7" />
              <img src={work2} alt="Activity 8" />
              <img src={work3} alt="Activity 9" />
              <img src={lia5} alt="Activity 10" />
              <img src={lia6} alt="Activity 11" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="gallery-card">
            <div className="gallery-slider">
              <img src={work4} alt="Activity 10" />
              <img src={work5} alt="Activity 11" />
              <img src={work6} alt="Activity 12" />
              <img src={lia7} alt="Activity 13" />
              <img src={lia8} alt="Activity 14" />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2 className="team-title">Our Team</h2>

        <h3 className="sub-title">Executive Team</h3>
        <div className="team-grid">
          <div className="team-card">
            <div className="avatar"></div>
            <h4 className="team-name">Kushal Raj Shiwakoti</h4>
            <p className="team-role">CEO</p>
          </div>

          <div className="team-card">
            <div className="avatar"></div>
            <h4 className="team-name">Karan Das</h4>
            <p className="team-role">Managing Director</p>
          </div>

          <div className="team-card">
            <div className="avatar"></div>
            <h4 className="team-name">Dipika Ghimire</h4>
            <p className="team-role">HR & Finance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
