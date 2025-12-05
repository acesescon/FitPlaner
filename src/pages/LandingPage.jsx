import React from 'react'
import Defaultpic from "../assets/default_profile.png"
import "../styles/LandingPage.css"

export default function LandingPage() {
  return (
    <>
      <section className="profile-container">

        {/*PROFILE PIC*/}
        <img src={Defaultpic} alt='default_pic.png'/>

        <div className='info-container'>

          {/*DISPALY USER INFO*/}
          <div className='info-box'>

            <article className='info'>
              <h2>Welcome Back, User!</h2>
              <p>Ready to crush your fitnes goal today?</p>
            </article>

            <article className='info'>
              <h3>Bio</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

            <article className='info'>
              <h3>Mantra</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

          </div> 


          {/*DISPALY USER CONTENTS*/}
          <div className='stats-box'>
            <div className='stat'>
              <p>programs Created</p>
              <h1>0</h1>
            </div>

            <div className='stat'>
              <p>Meal Plans</p>
              <h1>0</h1>
            </div>

            <div className='stat'>
              <p>Total Content</p>
              <h1>0</h1>
            </div>
          </div>
        </div>
      </section>

      {/*CLICKABLE ROUTES FOR CREATE*/}
      <section className="getstarted-container">

        <div className='create'>
          <h2>Create Program</h2>
          <p>Design a custom workout routine with exercises, sets, and reps tailored to your goals.</p>
          <button>Get Started</button>
        </div>

        <div className='create' style={{backgroundColor: "#22C55E"}}>
          <h2>Create Meal Plan</h2>
          <p>Plan your nutrition with balanced meals and track your macros to fuel your workouts.</p>
          <button>Get Started</button>
        </div>

      </section>
    </>
  )
}
