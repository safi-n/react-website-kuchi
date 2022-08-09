import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage
from "./pages/homePage/HomePage";
import Navbar from "./pages/shared/navbar/Navbar";
import Footer from "./pages/shared/footer/Footer";
import About from "./pages/about/About";
import ServicePage from "./pages/servicesPage/ServicePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/services" element={<ServicePage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
