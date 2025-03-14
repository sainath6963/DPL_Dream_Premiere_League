import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import Navbar from "./pages/sub-components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Registration from "./pages/sub-components/Registraion";
import Dashboard from "./pages/sub-components/Dashboard";
import Tournament from "./pages/sub-components/Tournament";

import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./pages/sub-components/AboutUS";
import Footer from "./pages/sub-components/Footer";
import Venue from "./pages/sub-components/Venue";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
      <Footer />
    </Router>
  );
};

export default App;
