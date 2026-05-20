import { useState } from 'react'
import signup_bg from '../assets/signup_bg.png'
import logo from '../assets/FitPlanner_icon.png'

export default function Signup({ onSwitchPage }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()
        setError('')
        setSuccess('')
        setLoading(true)

        // Validate full name
        if (!fullName.trim()) {
        setError('Full name is required.')
        setLoading(false)
        return
        }

        // Validate passwords match
        if (password !== confirmPassword) {
        setError('Passwords do not match.')
        setLoading(false)
        return
        }

        // Validate password length
        if (password.length < 6) {
        setError('Password must be at least 6 characters long.')
        setLoading(false)
        return
        }

        try {
        const res = await fetch('/api/routes/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ full_name: fullName, email, password }),
        })

        const data = await res.json()

        if (!res.ok) {
            setError(data?.error || 'Registration failed. Please try again.')
            return
        }

        setSuccess('Account created successfully! Redirecting to login...')
        setTimeout(() => {
            onSwitchPage()
        }, 1500)
        } catch (err) {
        setError('Unable to connect. Please try again later.')
        console.error('Registration request failed:', err)
        } finally {
        setLoading(false)
        }
    }

    return (
        <section className="flex flex-row">
        <div className="flex flex-col w-1/2 px-30 py-30 align-center h-screen justify-center">
            <div className="flex items-center mb-5 gap-2">
            <img src={logo} alt="FitPlanner logo" />
            <h1 className="text-3xl font-bold">FitPlanner</h1>
            </div>

            <h1 className="font-bold text-4xl">Create your account</h1>
            <p className="text-(--font-grey) text-lg">
            Join us and start your fitness journey today.
            </p>

            <form className="flex flex-col py-6" onSubmit={handleSubmit}>
            <div className="flex flex-col py-3">
                <label htmlFor="full_name">Full Name:</label>
                <input
                id="full_name"
                className="border border-[#E2E8F0] py-2 px-4 rounded-xl"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                required
                />
            </div>

            <div className="flex flex-col py-3">
                <label htmlFor="email">Email:</label>
                <input
                id="email"
                className="border border-[#E2E8F0] py-2 px-4 rounded-xl"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
                />
            </div>

            <div className="flex flex-col py-3">
                <label htmlFor="password">Password:</label>
                <input
                id="password"
                className="border border-[#E2E8F0] py-2 px-4 rounded-xl"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
                />
            </div>

            <div className="flex flex-col pb-6">
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input
                id="confirm_password"
                className="border border-[#E2E8F0] py-2 px-4 rounded-xl"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                />
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <button
                type="submit"
                className="bg-(--button-color) text-white text-lg p-2 rounded-xl mb-5 disabled:opacity-50"
                disabled={loading}
            >
                {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            </form>

            <div className="flex gap-2">
            <p>Already have an account?</p>
            <a
                href="/login"
                className="text-(--button-color)"
                onClick={(e) => {
                    e.preventDefault()
                    onSwitchPage()
                }}
                >
                Sign in
            </a>
            </div>
        </div>

        <div
            className="relative flex flex-col px-30 py-30 bg-(--font-black) bg-cover bg-no-repeat bg-center w-1/2 text-white justify-end"
            style={{ backgroundImage: `url(${signup_bg})` }}
        >
            <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-black/40 to-transparent" />
            <h1 className="text-5xl font-bold z-10">Transform Your Body, Transform Your Life.</h1>
            <p className="text-2xl z-10">
            Plan your workouts, track your meals, and achieve your fitness goals with our comprehensive planning tools.
            </p>
        </div>
        </section>
    )
}
