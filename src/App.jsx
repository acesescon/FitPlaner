import { Routes, Route, Navigate, Link, Router } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Navbar from "./components/NavbarComponent"
import Authentication from "./pages/Authentication"
import ContetsList from "./pages/ContentsList"
import CreatePage from "./pages/CreatePage"
import LandingPage from "./pages/LandingPage"
import Settings from "./pages/Settings"

export default function App() {
  

  {/*
  ===========================================
  HANDLE SUBMIT FUNCTION (CALLS onLogin PROP)
  LoginComponent.jsx => Authentication.jsx => App.jsx
  ===========================================*/}
  const [isLoggedIn, setISLoggedIn] = useState(true);
  const handleLogin = () => {
    setISLoggedIn(true);
  }

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 834) {
        setIsOpen(false); // 👈 force close
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>

      {isLoggedIn ? (
        //if true = isLoggedIn
        <div className="app-container">
          <button className='burger' 
            onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
          </button>

          <Navbar open={isOpen}  />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/contents" element={<ContetsList/>} />
              <Route path="/create" element={<CreatePage/>} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </main>
        </div>
        
      ) : (
        //if false = isLoggedIn
        <Authentication onLogin={handleLogin} /> 
      )}
      
    </>
  )
}
