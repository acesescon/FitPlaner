import React, { useState } from 'react';
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import "../styles/Authentication.css";

export default function Authentication({onLogin}) {

  {/*
  ===========================================
  TOGGLE BETWEEN LOGIN AND REGISTER VIEWS
  ===========================================*/}
  const [loginView, setLoginView] = useState(true);
  const goToLogin = () => setLoginView(true);
  const goToRegister = () => setLoginView(false);

  return (
    <main className="authentication-container">

      <div className="white-container">
      {loginView ? <LoginComponent onLogin={onLogin} goToRegister={goToRegister}/>
      : <RegisterComponent goToLogin={goToLogin}/>}
      </div>

      <div className="orange-container">
        <div>
          <h1>Transform Your Fitness <br></br>Journey</h1>
          <p className="explain">Create personalized workout programs and meal <br></br>plans tailored to your goals.</p>

          <div className="feature-container">
            <i className="fa-solid fa-pencil"></i>
            <div>
              <h4>Custom Programs</h4>
              <p>Build workouts that much your level</p>
            </div>
          </div>

          <div className="feature-container">
            <i className="fa-solid fa-pencil"></i>
            <div>
              <h4>Meal Planning</h4>
              <p>Trach nutrition and hit your macros</p>
            </div>
          </div>

          <div className="feature-container">
            <i className="fa-solid fa-pencil"></i>
            <div>
              <h4>Track Progress</h4>
              <p>Monitor your fitness journey</p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
