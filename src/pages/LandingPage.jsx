import React from 'react'
import Defaultpic from "../assets/default_profile.png"
import "../styles/LandingPage.css"
import {CirclePlus,UtensilsCrossed,ArrowRight,ListChecks,Utensils,TrendingUp} from "lucide-react"

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
              <h2>0</h2>
              <ListChecks size={50} strokeWidth={2.75} absoluteStrokeWidth style={{backgroundColor:"#FFEDD5",color:"#FF6B35"}} className='display-icons'/>
            </div>

            <div className='stat'>
              <p>Meal Plans</p>
              <h2>0</h2>
              <Utensils size={50} strokeWidth={2.75} absoluteStrokeWidth style={{backgroundColor:"#DCFCE7",color:"#22C55E"}} className='display-icons'/>
            </div>

            <div className='stat'>
              <p>Total Content</p>
              <h2>0</h2>
              <TrendingUp size={50} strokeWidth={2.75} absoluteStrokeWidth style={{backgroundColor:"#DBEAFE",color:"#3B82F6"}} className='display-icons'/>
            </div>
          </div>
        </div>
      </section>

      {/*CLICKABLE ROUTES FOR CREATE*/}
      <section className="getstarted-container">

        <div className='create'>
          <CirclePlus size={50} strokeWidth={2.75} absoluteStrokeWidth className='btn-icons' />
          <h2>Create Program</h2>
          <p>Design a custom workout routine with exercises, sets, and reps tailored to your goals.</p>
          <button>Get Started <ArrowRight absoluteStrokeWidth /></button>
        </div>

        <div className='create' style={{backgroundColor: "#22C55E"}}>
          <UtensilsCrossed size={50} strokeWidth={2.75} absoluteStrokeWidth className='btn-icons' />
          <h2>Create Meal Plan</h2>
          <p>Plan your nutrition with balanced meals and track your macros to fuel your workouts.</p>
          <button>Get Started <ArrowRight absoluteStrokeWidth /></button>
        </div>

      </section>
    </>
  )
}
