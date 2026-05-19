import logo from '../assets/FitPlanner_icon.png'

export default function Login() {
    return (
        <section className="flex flex-row ">
            <div className="flex flex-col w-1/2 px-30 py-10 align-center h-screen justify-center">
                <div className='flex items-center mb-5'>
                    <img className=''
                    src={logo}/>
                    <h1 className='text-3xl font-bold'
                    >FitPlanner</h1>
                </div>
                    <h1 className='font-bold text-4xl'
                    >Welcome back!</h1>
                    <p className='text-[var(--font-grey)] text-lg'
                    >Enter your details to access your fitness journey.</p>
                    <div className='flex flex-col py-6'>
                        <label>Email:</label>
                        <input className='border border-[#E2E8F0] py-2 px-4 rounded-xl'
                        type="text"
                        placeholder='example@gmail.com' />
                    </div>
                    <div className='flex flex-col pb-6'>
                        <label>Password:</label>
                        <input className='border border-[#E2E8F0] py-2 px-4 rounded-xl'
                        type="password"
                        placeholder='********' />
                        <a>Forgot Password?</a>
                    </div>
                    <button className='bg-[var(--button-color)] text-white text-lg p-2 rounded-xl mb-5' 
                    >Sign In</button>
                    <div className='flex gap-2'>
                        <p>Don't have an account? </p>
                        <a>Sign up</a>
                    </div>
            </div>

            <div className='px-30 py-10 bg-[var(--font-black)] w-1/2'>

            </div>
        </section>
    )
}
