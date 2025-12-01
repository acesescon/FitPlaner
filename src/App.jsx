import { Routes, Route, Navigate, Link, Router } from "react-router-dom";
import React, {useState} from "react";
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
  const [isLoggedIn, setISLoggedIn] = useState(false);
  const handleLogin = () => {
    setISLoggedIn(true);
  }

  return (
    <>

      {isLoggedIn ? (
        //if true = isLoggedIn
        <div className="app-container">
          <Navbar />
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
