import { Routes, Route, Navigate, Link } from "react-router-dom";
import React, {useState} from "react";
import Authentication from "./pages/Authentication"
import ContetsList from "./pages/ContentsList"
import CreatePage from "./pages/CreatePage"
import LandingPage from "./pages/LandingPage"
import Settings from "./pages/Settings"

export default function App() {
  const [isLoggedIn, setISLoggedIn] = useState(false);

  const handleLogin = () => {
    setISLoggedIn(true);
  }

  return (
    <div>

      {isLoggedIn ? (
        <ContetsList/> 
      ) : (
        <Authentication onLogin={handleLogin} />
      )}
      
    </div>
  )
}
