import React from "react";
import "../CSS/services.css"; // Correct path to your CSS
import stemImage from "../Assets/STEM-Education.jpeg";
import exibitionImage from "../Assets/exibition.jpg";
import roboticsImage from "../Assets/robotics.jpg";
import kitsImage from "../Assets/kits.png"; // New image for STEM & Robotics Kits

const Services = () => {
  const servicesData = [
    {
      img: stemImage,
      title: "STEM Education",
      desc: "Empowering students with STEM knowledge to unlock future career opportunities and foster innovative thinking.",
    },
    {
      img: exibitionImage,
      title: "Exhibition",
      desc: "Engage in hands-on learning! Students build real-world projects and showcase them in exhibitions, enhancing creativity, technical skills, and confidence.",
    },
    {
      img: roboticsImage,
      title: "Robotics Lab",
      desc: "Embark on an exciting robotic journey! Our programs encourage playful exploration, problem-solving, and innovation for curious minds.",
    },
    {
      img: kitsImage,
      title: "STEM & Robotics Kits",
      desc: "Bring innovation home! Explore hands-on STEM and robotics kits designed to inspire learning, creativity, and experimentation.",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-wrapper">
              <img src={service.img} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button
              className="see-more"
              onClick={() => alert("More info coming soon!")}
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
