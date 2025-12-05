import React from 'react'

export default function CreateProgram() {
  return (
    <>
        <h1>Create Workout Program </h1>
        <p>Design a custom workout routine with exercises and details</p>
        <form>
            <div className='program-details'>
                <h3>Program Details</h3>
                <label htmlFor="program-name">Program Name:</label>
                <input type="text" id="program-name" name="program-name" placeholder='e.g., Upper Body Strength' required />

                {/* will be adding a map method for displaying training days, difficulty, row exercise */}

            </div>
        </form>
    </>
  )
}
