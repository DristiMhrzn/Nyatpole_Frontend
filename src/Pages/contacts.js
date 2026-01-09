import React, { useState } from "react";
import "../CSS/contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your enquiry has been sent.`);
    // You can later integrate with backend or email service
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We are here to help! Reach out to us with any questions or inquiries
          about our services and solutions.
        </p>
      </div>

      {/* Company Info Section */}
      <div className="contact-info">
        <h2>About Our Company</h2>
        <p>
          Nyatpole Solutions is committed to delivering innovative technology
          solutions that empower businesses and individuals alike. Our team of
          experts ensures top-quality service and customer satisfaction.
        </p>
      </div>

      {/* Enquiry Form Section */}
      <div className="contact-form-container">
        <h2>Send Us an Enquiry</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
