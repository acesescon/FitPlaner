import React from 'react'
import '../styles/CreateProgram.css'
import { useState } from "react";

export default function CreateProgram() {
  //====CONTAINER FOR ITERATIONS OF BTN DAYS=====
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [selectedDays, setSelectedDays] = useState([]);
  //=====CONTAINER FOR ITERATIONS OF BTN DIFFICILTIES====
  const difficulties = ["Beginner","Intermediate","Advanced"];
  const [selectedDiff, setSelectedDiff] = useState("Beginner");
  //=====STATE FOR EXERCISES=====
  const [exercises, setExercises] = useState([
    { name: "", sets: "", reps: "", rest: "" }
  ]);
  
  //====WHEN BTN DAYS CLICKED=====
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  }

  const addExercise = () => { //add new exercise row TOGGLE
    setExercises([...exercises, 
      { name: "", sets: "", reps: "", rest: "" }]);
  }

  return (
    <>
        <h1>Create Workout Program </h1>
        <p>Design a custom workout routine with exercises and details</p>
        <form>
            <div className='program-details'>
                <h3>Program Details</h3>
                <div className='input-progName'>
                  <label htmlFor="program-name">Program Name:</label>
                  <input type="text" id="program-name" name="program-name" placeholder='e.g., Upper Body Strength' />
                </div>

                {/* ITERATION OF BTN DAYS WITH LOGIC FOR SELECTED DAYS */}
                <div className='button-days'>
                  <label>Select Training Days:</label>

                  <div className='days-container'>
                    {days.map(day => (
                      <button
                        type='button'
                        key={day}
                        className={`day-btn ${selectedDays.includes(day) ? "selected" : ""}`}
                        onClick={() => toggleDay(day)} 
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className='diff-level'>
                  <label>Difficulty Level:</label>

                  <div className='difficulties'>
                    {difficulties.map(diff => (
                      <button 
                        type='button'
                        key={diff}
                        className={`diff-btn ${selectedDiff == diff ? "selected" : ""}`}
                        onClick={() => setSelectedDiff(diff)}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>
            </div>

            <div className="exercise-form">
              <div className='exercise-header'>
                <h3>Exercises</h3>
                <button type="button" className="add-exercise-btn" onClick={addExercise}>+ Add Exercise</button>
              </div>

              {exercises.map((exercise, index) => (
                <div className='exercise-group' key={index}>

                  <input
                    type="text"
                    className="exercise-input"
                    placeholder="Exercise Name"
                    value={exercise.name}
                    onChange={(e) => { //automatically update exercise name in the array
                      const newExercises = [...exercises];
                      newExercises[index].name = e.target.value;
                      setExercises(newExercises);
                    }}
                  />

                  <input 
                    type='text'
                    className="exercise-input"
                    placeholder="Sets"
                    value={exercise.sets}
                    onChange={(e) => { //automatically update exercise name in the array
                      const newExercises = [...exercises];
                      newExercises[index].sets = e.target.value;
                      setExercises(newExercises);
                    }}
                  />

                  <input 
                    type='text'
                    className="exercise-input"
                    placeholder="Reps"
                    value={exercise.reps}
                    onChange={(e) => { //automatically update exercise name in the array
                      const newExercises = [...exercises];
                      newExercises[index].reps = e.target.value;
                      setExercises(newExercises);
                    }}
                  />

                  <input 
                    type='text'
                    className="exercise-input"
                    placeholder="Rest (seconds)"
                    value={exercise.rest}
                    onChange={(e) => { //automatically update exercise name in the array
                      const newExercises = [...exercises];
                      newExercises[index].rest = e.target.value;
                      setExercises(newExercises);
                    }}
                  />

                  <button 
                    type="button" 
                    className="remove-exercise-btn"
                    onClick={() => { //remove exercise from the array
                      const newExercises = exercises.filter((_, i) => i !== index);
                      setExercises(newExercises);
                    }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>

            <div className="form-actions">
                <button type="submit" className="create-plan-btn">Create Meal Plan</button>
                <button type='cancel' className="cancel-btn">Cancel</button>
            </div>
        </form>
    </>
  )
}
