import React from 'react'
import { useState } from 'react'
import '../styles/CreatePage.css'
import CreateMealPlan from '../components/CreateMealPlan.jsx'
import CreateProgram from '../components/CreateProgram.jsx'

export default function CreatePage() {
  const [renderCreate, setRenderCreate] = useState("workout") 

  return (
    <>
      <div className="create-page-tabs">
        <button
          className={`plan ${renderCreate === "workout" ? "active" : ""}`}
          onClick = {() => setRenderCreate("workout")}
          >Workout Plan</button>
        <button
          className={`plan ${renderCreate === "mealplan" ? "active" : ""}`}
          onClick = {() => setRenderCreate("mealplan")}
          >Meal Plan</button>
      </div>

      {renderCreate === "workout" ? <CreateProgram /> : <CreateMealPlan />} {/*conditional rendering based on selected tab*/}
    </>
  )
}
