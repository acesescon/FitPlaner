import { useState } from 'react'
import logo from '../assets/FitPlanner_icon.png'
import login_bg from '../assets/login_bg.png'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()
        setError('')
        setLoading(true)

        try {
        const res = await fetch('/api/routes/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        const data = await res.json()

        if (!res.ok) {
            setError(data?.error || 'Login failed. Please try again.')
            return
        }

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        window.location.href = '/dashboard'
        } catch (err) {
        setError('Unable to connect. Please try again later.')
        console.error('Login request failed:', err)
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

            <h1 className="font-bold text-4xl">Welcome back!</h1>
            <p className="text-(--font-grey) text-lg">
            Enter your details to access your fitness journey.
            </p>

            <form className="flex flex-col py-6" onSubmit={handleSubmit}>
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

            <div className="flex flex-col pb-6">
                <label htmlFor="password">Password:</label>
                <input
                id="password"
                className="border border-[#E2E8F0] py-2 px-4 rounded-xl"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                />
                <a href="/forgot-password" className="text-sm text-(--font-grey) mt-2">
                Forgot Password?
                </a>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
                type="submit"
                className="bg-(--button-color) text-white text-lg p-2 rounded-xl mb-5 disabled:opacity-50"
                disabled={loading}
            >
                {loading ? 'Signing in...' : 'Sign In'}
            </button>
            </form>

            <div className="flex gap-2">
            <p>Don't have an account?</p>
            <a href="/signup" className="text-(--button-color)">Sign up</a>
            </div>
        </div>

        <div
            className="relative flex flex-col px-30 py-30 bg-(--font-black) bg-cover bg-no-repeat bg-center w-1/2 text-white justify-end"
            style={{ backgroundImage: `url(${login_bg})` }}
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
