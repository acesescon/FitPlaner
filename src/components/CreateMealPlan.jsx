import React from 'react'
import { useState } from "react";
import '../styles/CreateMealPlan.css'

export default function CreateMealPlan() {
    const [Meals, setMeals] = useState([
        { name: "", quantity: "", calories: "", carbs: "", fats: "" }
    ]);

    const addMeal = () => { //add new meal row TOGGLE
        setMeals([...Meals, 
            { name: "", quantity: "", calories: "", carbs: "", fats: "" }]);
    }

    return (
        <main className="create-meal-plan">
            <h1>Create Meal Plan</h1>
            <p>Plan your nutrition with balanced meals and macro tracking</p>
            <form className="meal-plan-form">
                <div className="plan-details">
                    <h3>Plan Details</h3>
                    <div className='input-group'>
                        <div className='input-field'>
                            <label htmlFor="plan-name">Plan Name</label>
                            <input type="text" id="plan-name" name="plan-name" placeholder="e.g., Summer Shred" />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="duration">Duration (weeks)</label>
                            <input type="number" id="duration" name="duration" min="1" max="52" placeholder="e.g., 8weeks" />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="meals-per-day">Meals per Day</label>
                            <input type="number" id="meals-per-day" name="meals-per-day" min="1" max="10" placeholder="e.g., 5" />
                        </div>
                    </div>
                </div>

                <div className="meal-plans">
                    <div className="meal-plans-header">
                        <h3>Meals</h3>
                        <button type="button" className="add-meal-btn" onClick={addMeal}>+ Add Meal</button>
                    </div>
                    
                    {Meals.map((meal, index) => (
                        <div className='meal-group' key={index}>

                            <input 
                                type="text" 
                                className="meal-name" 
                                placeholder="Meal Name (e.g., Rice (Breakfast))"
                                value={meal.name} 
                                onChange={(e) => {
                                    const newMeals = [...Meals]
                                    newMeals[index].name = e.target.value
                                    setMeals(newMeals)
                                }}
                                />

                            <div className='meal-row'>

                                <input 
                                    type="text" 
                                    className="quantity" 
                                    placeholder="Protiens (g)" 
                                    value={meal.quantity} 
                                    onChange={(e) => {
                                        const newMeals = [...Meals]
                                        newMeals[index].quantity = e.target.value
                                        setMeals(newMeals)
                                    }}
                                    />
                                
                                <input 
                                    type="text" 
                                    className="calories" 
                                    placeholder="Calories" 
                                    value={meal.calories} 
                                    onChange={(e) => {
                                        const newMeals = [...Meals]
                                        newMeals[index].calories = e.target.value
                                    }}
                                    />

                                <input 
                                    type="text" 
                                    className="carbs" 
                                    placeholder="Carbs (g)" 
                                    value={meal.carbs} 
                                    onChange={(e) => {
                                        const newMeals = [...Meals]
                                        newMeals[index].carbs = e.target.value
                                        setMeals(newMeals)
                                    }} />

                                <input 
                                    type="text" 
                                    className="fats" 
                                    placeholder="Fats (g)" 
                                    value={meal.fats} 
                                    onChange={(e) => {
                                        const newMeals = [...Meals]
                                        newMeals[index].fats = e.target.value
                                        setMeals(newMeals)
                                    }}
                                    />

                            </div>
                        </div>
                    ))}
                    
                </div>

                <div className="form-actions">
                    <button type="submit" className="create-plan-btn">Create Meal Plan</button>
                    <button type='cancel' className="cancel-btn">Cancel</button>
                </div>
            </form>
        </main>
    )
}
