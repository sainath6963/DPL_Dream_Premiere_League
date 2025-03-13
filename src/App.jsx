import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import Navbar from "./pages/sub-components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";

import "./App.css";
// import { getAllMessages } from "./store/slices/messagesSlice";

// import { getAllProjects } from "./store/slices/projectSlice";
import Registraion from "./pages/sub-components/Registraion";
import Dashboard from "./pages/sub-components/Dashboard";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllMessages());

  //   dispatch(getAllProjects());
  // });

  React.useEffect(() => {
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
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/registration" element={<Registraion />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
};

export default App;
