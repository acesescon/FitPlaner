import "../styles/LoginComponent.css"
import { loginUser } from '../api/login';
import { useState } from 'react';

export default function LoginComponent({goToRegister,onLogin}) {
  {/*
  ===========================================
  HANDLE SUBMIT FUNCTION (CALLS onLogin PROP)
  LoginComponent.jsx => Authentication.jsx => App.jsx
  ===========================================*/}
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.error) {
      setError(result.error);
    } else {
      onLogin();
      alert("Login successful");
    }
  }

  return (
    <div className='login-container'>

      <h1>FitPlaner</h1>
      <h2>Welcome Back</h2>
      <p>Sign In to continue your fitness journey</p>

      <form className='login-form' onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder='you@gmail.com' value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Sign In</button>
      </form>

      <div><p>Don't have an account?</p><a onClick={(e) => {e.preventDefault(); goToRegister()}}>Sign Up</a></div>
      <p>{error}</p>
    </div>
  )
}
