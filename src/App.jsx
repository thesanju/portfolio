import React, { useCallback } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const NavbarWrapper = React.memo(() => {
  const location = useLocation();
  
  const isActive = useCallback((path) => {
    return location.pathname === path;
  }, [location]);

  return <Navbar isActive={isActive} />;
});

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <BrowserRouter>
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;