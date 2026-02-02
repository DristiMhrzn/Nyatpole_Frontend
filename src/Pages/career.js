import { useState } from "react";
import Loader from "../Components/loader";
import { toast } from "react-toastify";
import "../CSS/career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    reason: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const clearFile = () => {
    setCvFile(null);
    document.getElementById("cv").value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      toast.error("Please upload your CV.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("full_name", formData.fullName);
      data.append("email", formData.email);
      data.append("contact_number", formData.contact);
      data.append("message", formData.reason);
      data.append("cv_file", cvFile);

      const response = await fetch(
        "https://mailing.resensefy.com/nyatpole/career-redirect",
        {
          method: "POST",
          body: data,
        },
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success("Application submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        contact: "",
        reason: "",
      });
      clearFile();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-page">
      {loading && <Loader />}
      <div className="career-container">
        {/* Left Form Section */}
        <div className="career-form-section">
          <h2>Connect Now</h2>
          <p>Fill in the form below and join our dynamic team!</p>

          {/* {status.message && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )} */}

          <form className="career-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason">
                Why do you want to join our team? *
              </label>
              <textarea
                id="reason"
                placeholder="Tell us why..."
                rows="4"
                value={formData.reason}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* CV Upload */}
            <div className="form-group cv-upload">
              <label htmlFor="cv">Upload Your CV</label>
              <input
                type="file"
                id="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />

              {cvFile && (
                <div className="file-info">
                  <span>{cvFile.name}</span>
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={clearFile}
                  >
                    ×
                  </button>
                </div>
              )}

              <small>Accepted formats: PDF, DOC, DOCX</small>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="career-info-section">
          <h1>Join Our Team</h1>
          <h3>Let's build success together</h3>
          <p>
            At Nyatpole, we nurture creativity, innovation, and collaboration.
            We are looking for passionate individuals who want to make a
            difference in STEM and robotics education. Join us and be part of
            our journey to shape the future!
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
