import logo from '../assets/FitPlanner_icon.png'

export default function Dashboard({ user, onLogout }) {
    return (
        <main className="min-h-screen bg-slate-100 text-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-10">
            <header className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-lg sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
                <img src={logo} alt="FitPlanner logo" className="h-12 w-12" />
                <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">FitPlanner</p>
                <h1 className="text-3xl font-bold">Welcome, {user?.email || 'Athlete'}!</h1>
                </div>
            </div>
            <button
                type="button"
                onClick={onLogout}
                className="rounded-2xl bg-[#2563eb] px-5 py-3 text-white transition hover:bg-[#1d4ed8]"
            >
                Log out
            </button>
            </header>

            <section className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-semibold">Your dashboard</h2>
                <p className="mt-4 text-slate-600">
                This is the best practice landing screen after login. You can extend it with workout plans, meal tracking,
                and progress summaries.
                </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-semibold">Get started</h2>
                <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Create training routines</li>
                <li>• Track your meals and calories</li>
                <li>• Review progress and goals</li>
                </ul>
            </article>
            </section>
        </div>
        </main>
    )
}
