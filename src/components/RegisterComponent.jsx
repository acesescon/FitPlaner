import React from 'react'

export default function RegisterComponent() {
    return (
        <div className='login-container'>
        <h1>FitPlaner</h1>
        <h2>Create your account</h2>
        <p>Start building your perfect workout routine</p>
        <form className='login-form'>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" name="fname" required placeholder='John Doe' />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder='you@gmail.com'/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Create Account</button>
        </form>
        <div><p>Aleardy have an account?</p><a href="/register">Log In</a></div>
        </div>
    )
}
