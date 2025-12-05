import React from 'react'
import "../styles/ContentsList.css"

export default function ContentsList() {
  return (
    <>
      <div className='heading-container'>
        <h1>My Content</h1>
        <p>View and manage your workout programs and meal plans</p>
      </div>

      {/*BUTTON FILTER VIEW*/}
      <div className='content-buttons'>
        <button>Programs 0</button>
        <button>Meal Plans 0</button>
      </div>

      {/*FILTER ACCODRING TO DAY*/}
      <div className='filter-container'>
        <label htmlFor="filter">Filter by Day: </label>
        <select id="filter" name="filter">
          <option value="all">All Days</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>

      {/*MAIN CONTENT GOES HERE GRID 3X3
      2 COMPONENT (PROGRAMS PLAN, MEAL PLANS)*/}
      <main>
        
      </main>
    </>
  )
}
