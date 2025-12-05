import React from 'react'
import '../styles/CreatePage.css'
import CreateMealPlan from '../components/CreateMealPlan.jsx'
import CreateProgram from '../components/CreateProgram.jsx'

export default function CreatePage() {
  return (
    <>
      {/* CreatePage Content Goes Here
      -conditional rendering between meal plan and program plan
      -use prop */}

      <CreateProgram />
      {/*<CreateMealPlan />*/}
    </>
  )
}
