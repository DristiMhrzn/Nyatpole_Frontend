import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/servicesubpage.css";

import stemImage from "../Assets/STEM-Education.jpeg";
import exibitionImage from "../Assets/Nyat-Pole Photos/Services/Stem_Exhibition-camp/exh.jpg";
import roboticsImage from "../Assets/robotics.jpg";
import kitsImage from "../Assets/kits.png";

import stem1 from "../Assets/Nyat-Pole Photos/Services/First_services_box_Stem_education_program/Age_appropriate_stem_program.png";
import stem2 from "../Assets/Nyat-Pole Photos/Services/First_services_box_Stem_education_program/Hands_on_Experiment_and_Demonstration.jpeg";
import stem3 from "../Assets/Nyat-Pole Photos/Services/First_services_box_Stem_education_program/Programs_for_schools_colleges_learning_centers.jpg";
import stem4 from "../Assets/Nyat-Pole Photos/Services/First_services_box_Stem_education_program/Project-based_and_inquiry-driven_learning.png";

import stemexh1 from "../Assets/Nyat-Pole Photos/Services/Second_inside_Exibhition-camp/Hands_on_Experiment_and_Demonstration.jpeg";
import stemexh2 from "../Assets/Nyat-Pole Photos/Services/Second_inside_Exibhition-camp/Innovation_holiday_camps.jpg";
import stemexh3 from "../Assets/Nyat-Pole Photos/Services/Second_inside_Exibhition-camp/Live_project_demonstrations.jpg";
import stemexh4 from "../Assets/Nyat-Pole Photos/Services/Second_inside_Exibhition-camp/STEM_robotics_exhibitions.jpg";

import robokit1 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_kits/Beginner_to_advanced_level_kits.png";
import robokit2 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_kits/STEM_robotics_combo_kits.png";
import roboikt3 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_kits/Clear_manuals_guided_projects.png";
import robokit4 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_kits/Suitable_for_schools_individuals.png";

import robolab1 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_lab_setup_and_training/Robotics_Lab_Design_and_Installation.jpg";
import robolab2 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_lab_setup_and_training/Arduino_and_sensor_based_projects.jpg";
import robolab3 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_lab_setup_and_training/Students_and_Teacher_Training.jpg";
import robolab4 from "../Assets/Nyat-Pole Photos/Services/Stem-robotics_lab_setup_and_training/Competition_and_project_support.jpg";

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
          <div className="highlight-image">
            <img src={item.image} alt={item.title} />
          </div>
          <p>{item.title}</p>
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
          { title: "Age-appropriate STEM curriculum", image: stem1 },
          { title: "Hands-on experiments & demonstrations", image: stem2 },
          {
            title: "Programs for schools, colleges & learning centers",
            image: stem4,
          },
          { title: "Project-based and inquiry-driven learning", image: stem3 },
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
          { title: "STEM & robotics exhibitions", image: stemexh4 },
          { title: "Innovation & holiday camps", image: stemexh2 },
          { title: "Interactive hands-on workshops", image: stemexh1 },
          { title: "Live project demonstrations", image: stemexh3 },
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
          { title: "Robotics lab design & installation", image: robolab1 },
          { title: "Arduino & sensor-based projects", image: robolab2 },
          { title: "Student and teacher training", image: robolab3 },
          { title: "Competition & project support", image: robolab4 },
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
          { title: "Beginner to advanced level kits", image: robokit1 },
          { title: "STEM & robotics combo kits", image: robokit2 },
          { title: "Clear manuals & guided projects", image: roboikt3 },
          { title: "Suitable for schools & individuals", image: robokit4 },
        ])}
      </section>
    </div>
  );
};

export default ServiceSubPage;
