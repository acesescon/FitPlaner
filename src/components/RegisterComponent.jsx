import { registerUser } from '../api/register';
import { useState } from "react";

export default function RegisterComponent({goToLogin}) {
    {/*
    ===========================================
    RegisterComponent.jsx => Authentication.jsx => App.jsx
    ===========================================*/}
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const result = await registerUser(name, email, password);
        setMessage(result.message);
        alert(message)
        goToLogin();
    };

    return (
        <div className='login-container'>
        <h1>FitPlaner</h1>
        <h2>Create your account</h2>
        <p>Start building your perfect workout routine</p>
        <form className='login-form' onSubmit={handleRegister}>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" name="fname" required placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder='you@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Create Account</button>
        </form>
        <div><p>Aleardy have an account?</p><a onClick={(e) => {e.preventDefault(); goToLogin();}}>Log In</a></div>
        </div>
    )
}
