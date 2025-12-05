import React from 'react'
import '../styles/CreateMealPlan.css'

export default function CreateMealPlan() {
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
                <h3>Meals</h3>
                <button type="button" className="add-meal-btn">+ Add Meal</button>
                <div className='meal-group'>
                    <input type="text" className="meal-name" placeholder="Meal Name (e.g., Rice (Breakfast))" />
                    <div className='meal-row'>
                        <input type="text" className="quantity" placeholder="Protiens (g)" />
                        <input type="text" className="calories" placeholder="Calories " />
                        <input type="text" className="carbs" placeholder="Carbs (g)" />
                        <input type="text" className="fats" placeholder="Fats (g)" />
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="create-plan-btn">Create Meal Plan</button>
                <button type='cancel' className="cancel-btn">Cancel</button>
            </div>
        </form>
    </main>
  )
}
