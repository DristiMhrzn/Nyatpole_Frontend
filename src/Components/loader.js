import "./loader.css";

const Loader = ({ text = "Submitting..." }) => {
  return (
    <div className="loader-overlay">
      <div className="loader-card">
        <div className="spinner"></div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Loader;
