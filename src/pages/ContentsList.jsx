import React from 'react'
import "../styles/ContentsList.css"
import {useState} from 'react'
import {ClipboardList,Utensils} from "lucide-react"
import DisplayProgram from '../components/DisplayProgram'
import DisplayMeal from '../components/DisplayMeal'

export default function ContentsList() {
  //for rendering displayPlan and displayMeal
  const [display, setDisplay] = useState("program")

  return (
    <>
      <div className='heading-container'>
        <h1>My Content</h1>
        <p>View and manage your workout programs and meal plans</p>
      </div>

      {/*BUTTON FILTER VIEW*/}
      <div className='content-buttons'>
        <button onClick={() => setDisplay("program")}><ClipboardList /> Programs 0</button>
        <button onClick={() => setDisplay("meal")}><Utensils />Meal Plans 0</button>
      </div>
      
      <main>
        {display == "program" ? <DisplayProgram /> : <DisplayMeal />}
      </main>
    </>
  )
}
