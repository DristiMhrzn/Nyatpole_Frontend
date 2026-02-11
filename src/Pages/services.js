import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/services.css";

import stemImage from "../Assets/STEM-Education.jpeg";
import exibitionImage from "../Assets/Nyat-Pole Photos/Services/Stem_Exhibition-camp/exh.jpg";
import roboticsImage from "../Assets/robotics.jpg";
import kitsImage from "../Assets/kits.png";

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: "stem",
      img: stemImage,
      title: "STEM Education Programs",
      desc: "Empowering students with STEM knowledge to unlock future career opportunities and foster innovative thinking.",
    },
    {
      id: "exhibition",
      img: exibitionImage,
      title: "STEM Exhibitions, Camps & Workshops",
      desc: "Engage in hands-on learning! Students build real-world projects and showcase them in exhibitions, enhancing creativity, technical skills, and confidence.",
    },
    {
      id: "robotics",
      img: roboticsImage,
      title: "Robotics Lab Setup & Training",
      desc: "Embark on an exciting robotic journey! Our programs encourage playful exploration, problem-solving, and innovation for curious minds.",
    },
    {
      id: "kits",
      img: kitsImage,
      title: "STEM & Robotics Kits",
      desc: "Bring innovation home! Explore hands-on STEM and robotics kits designed to inspire learning, creativity, and experimentation.",
    },
  ];

  const handleSeeMore = (serviceId) => {
    navigate("/services/details", {
      state: { serviceId },
    });
  };

  return (
    <div className="services-container">
      {/* ✅ New heading and intro */}
      <h1 className="page-title">Our Services</h1>
      <p className="page-intro">
        We provide innovative STEM and robotics solutions that empower students
        to learn through hands-on experience, creativity, and real-world
        problem-solving.
      </p>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="image-wrapper">
              <img src={service.img} alt={service.title} />
            </div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <button
              className="see-more"
              onClick={() => handleSeeMore(service.id)}
            >
              See more...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
