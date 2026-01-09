import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./Pages/landing";
import AboutUs from "./Pages/aboutUs";
import Services from "./Pages/services";
import ServiceSubPage from "./Pages/servicesubpage";
import Career from "./Pages/career";
import Contacts from "./Pages/contacts"; 

// Components
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/details" element={<ServiceSubPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contacts" element={<Contacts />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
