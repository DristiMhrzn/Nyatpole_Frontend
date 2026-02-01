import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/servicesubpage.css";

import stemImage from "../Assets/STEM-Education.jpeg";
import exibitionImage from "../Assets/exibition.jpg";
import roboticsImage from "../Assets/robotics.jpg";
import kitsImage from "../Assets/kits.png";

const ServiceSubPage = () => {
  const location = useLocation();

  const stemRef = useRef(null);
  const exhibitionRef = useRef(null);
  const roboticsRef = useRef(null);
  const kitsRef = useRef(null);

  useEffect(() => {
    if (!location.state) return;

    const map = {
      stem: stemRef,
      exhibition: exhibitionRef,
      robotics: roboticsRef,
      kits: kitsRef,
    };

    map[location.state.serviceId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [location.state]);

  const renderHighlights = (highlights) => (
    <div className="service-highlights">
      {highlights.map((item, index) => (
        <div key={index} className="highlight-card">
          <div className="highlight-image"></div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="service-page">
      {/* STEM */}
      <section ref={stemRef} className="service-section">
        <div className="services-header-desc">
          <img src={stemImage} alt="STEM Education" />
          <div className="service-content">
            <h2>STEM Education Programs</h2>
            <p>
              Our STEM Education Programs are designed to build a strong
              academic and practical foundation in Science, Technology,
              Engineering, and Mathematics. We focus on experiential learning
              rather than rote memorization.
              <br />
              <br />
              Students actively participate in experiments, mini-projects, and
              interactive activities that enhance analytical thinking,
              creativity, and innovation.
            </p>
          </div>
        </div>
        {renderHighlights([
          "Age-appropriate STEM curriculum",
          "Hands-on experiments & demonstrations",
          "Project-based and inquiry-driven learning",
          "Programs for schools, colleges & learning centers",
        ])}
      </section>

      {/* EXHIBITIONS */}
      <section ref={exhibitionRef} className="service-section">
        <div className="services-header-desc">
          <img src={exibitionImage} alt="STEM Exhibitions" />
          <div className="service-content">
            <h2>STEM Exhibitions, Camps & Workshops</h2>
            <p>
              Our STEM exhibitions, camps, and workshops create an engaging
              platform for students to apply their knowledge to real-world
              challenges and present their innovative ideas confidently.
              <br />
              <br />
              These programs foster teamwork, communication skills, and a strong
              sense of curiosity while promoting learning through collaboration.
            </p>
          </div>
        </div>
        {renderHighlights([
          "STEM & robotics exhibitions",
          "Innovation & holiday camps",
          "Interactive hands-on workshops",
          "Live project demonstrations",
        ])}
      </section>

      {/* ROBOTICS */}
      <section ref={roboticsRef} className="service-section">
        <div className="services-header-desc">
          <img src={roboticsImage} alt="Robotics Lab" />
          <div className="service-content">
            <h2>Robotics Lab Setup & Training</h2>
            <p>
              We provide complete robotics lab setup solutions along with
              structured training programs that introduce students to robotics,
              automation, electronics, and basic programming.
              <br />
              <br />
              Our training emphasizes hands-on learning, experimentation, and
              innovation using real hardware and tools.
            </p>
          </div>
        </div>
        {renderHighlights([
          "Robotics lab design & installation",
          "Arduino & sensor-based projects",
          "Student and teacher training",
          "Competition & project support",
        ])}
      </section>

      {/* KITS */}
      <section ref={kitsRef} className="service-section">
        <div className="services-header-desc">
          <img src={kitsImage} alt="STEM Kits" />
          <div className="service-content">
            <h2>STEM & Robotics Kits</h2>
            <p>
              Our STEM and robotics kits are carefully curated to encourage
              independent exploration, experimentation, and creativity among
              learners of all levels.
              <br />
              <br />
              These kits are ideal for classroom use, robotics labs, and home
              learning environments.
            </p>
          </div>
        </div>
        {renderHighlights([
          "Beginner to advanced level kits",
          "STEM & robotics combo kits",
          "Clear manuals & guided projects",
          "Suitable for schools & individuals",
        ])}
      </section>
    </div>
  );
};

export default ServiceSubPage;
