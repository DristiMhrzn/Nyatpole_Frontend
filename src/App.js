import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Loader from "./Components/loader";

// Lazy-loaded pages
const Landing = lazy(() => import("./Pages/landing"));
const AboutUs = lazy(() => import("./Pages/aboutUs"));
const Services = lazy(() => import("./Pages/services"));
const ServiceSubPage = lazy(() => import("./Pages/servicesubpage"));
const Career = lazy(() => import("./Pages/career"));
const Contacts = lazy(() => import("./Pages/contacts"));
const NotFound = lazy(() => import("./Pages/notfound"));

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Suspense fallback={<Loader text="Loading..." />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/details" element={<ServiceSubPage />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
