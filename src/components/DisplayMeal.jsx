import React from 'react'
import {useState} from 'react'

export default function DisplayMeal() {
    const [meal, setMeal] = useState([
        {
            name: "Cutting Phase",
            duration: "4 weeks",
            mealsPerDay: 3,
            meals: [
            {
                name: "Breakfast",
                calories: 350,
                protein: 20,
                carbs: 40,
                fats: 10
            },
            {
                name: "Lunch",
                calories: 500,
                protein: 35,
                carbs: 60,
                fats: 15
            },
            {
                name: "Dinner",
                calories: 450,
                protein: 30,
                carbs: 50,
                fats: 12
            }
            ],
            dateCreated: "2025-12-18"
        },
        {
            name: "Bulking Phase",
            duration: "6 weeks",
            mealsPerDay: 4,
            meals: [
            {
                name: "Breakfast",
                calories: 400,
                protein: 25,
                carbs: 45,
                fats: 12
            },
            {
                name: "Snack",
                calories: 200,
                protein: 10,
                carbs: 20,
                fats: 5
            },
            {
                name: "Lunch",
                calories: 550,
                protein: 35,
                carbs: 65,
                fats: 18
            },
            {
                name: "Dinner",
                calories: 500,
                protein: 30,
                carbs: 55,
                fats: 15
            }
            ],
            dateCreated: "2025-12-18"
        }
        ]);


    return (
        <div className='program-grid'>
                {meal.map((meal, index) => (
                    <div key={index} className="program-card">
                        <h4>{meal.name}</h4>
                        <p><strong>Days:</strong> {meal.duration}</p>
                        <p><strong>Exercises:</strong> {meal.mealsPerDay} meals/day</p>
                        <p><strong>Difficulty:</strong> {meal.meals.length} meals planned</p>
                        <span></span>
                        <p><strong>Date Created:</strong> {meal.dateCreated}</p>
                    </div>
                ))}
            </div>
    )
}
