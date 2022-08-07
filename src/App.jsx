import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage
from "./pages/home/HomePage";
import Navbar from "./pages/shared/navbar/Navbar";
import Footer from "./pages/shared/footer/Footer";
import About from "./pages/about/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
