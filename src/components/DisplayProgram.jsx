import React from 'react'
import { useState } from 'react'
import "../styles/DisplayProgram.css"

export default function DisplayProgram() {
    const [programs, setPrograms] = useState([
        {
            name: "Full Body Workout",
            days: ["Monday", "Wednesday", "Friday"],
            exercises: ["Push-ups", "Squats", "Burpees"],
            difficulty: "Intermediate",
            dateCreated: "2024-01-15"
        },
        {
            name: "Full Body Workout",
            days: ["Monday", "Wednesday", "Friday"],
            exercises: ["Push-ups", "Squats", "Burpees"],
            difficulty: "Intermediate",
            dateCreated: "2024-01-15"
        },
        {
            name: "Full Body Workout",
            days: ["Monday", "Wednesday", "Friday"],
            exercises: ["Push-ups", "Squats", "Burpees"],
            difficulty: "Intermediate",
            dateCreated: "2024-01-15"
        }
    ])

    return (
        <>
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

            <div className='program-grid'>
                {programs.map((program, index) => (
                    <div key={index} className="program-card">
                        <h4>{program.name}</h4>
                        <p><strong>Days:</strong> {program.days.join(", ")}</p>
                        <p><strong>Exercises:</strong> {program.exercises.join(", ")}</p>
                        <p><strong>Difficulty:</strong> {program.difficulty}</p>
                        <span></span>
                        <p><strong>Date Created:</strong> {program.dateCreated}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
