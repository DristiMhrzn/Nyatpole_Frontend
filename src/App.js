import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Pages/landing";
import AboutUs from "./Pages/aboutUs";
import Services from "./Pages/services";
import Career from "./Pages/career";
import Navbar from "./Components/navbar";

function App() {
  return (
    <Router>
     
      <Navbar />  

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
