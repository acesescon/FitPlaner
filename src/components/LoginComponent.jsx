import React from 'react'
import "../styles/LoginComponent.css"

export default function LoginComponent() {
  return (
    <div className='login-container'>
      <h1>FitPlaner</h1>
      <h2>Welcome Back</h2>
      <p>Sign In to continue your fitness journey</p>
      <form className='login-form'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder='you@gmail.com' />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
      <div><p>Don't have an account?</p><a href="/register">Sign Up</a></div>
    </div>
  )
}
