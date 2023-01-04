import Link from 'next/link';
import React, { useState } from 'react'
import Typewriter from "typewriter-effect";

const Login = () => {
    const [formData, setFormData] = useState(null);
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleLogin = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <section className="text-gray-600">
            <div className="container px-5 h-screen m-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        Welcome back <span className="text-green-500">Researcher!</span>
                    </h1>
                    <p className="leading-relaxed mt-4">
                        <Typewriter
                            options={{
                                strings: [
                                    "We're glad to see you again.",
                                    "Our research paper recommender system is designed to help you discover the most relevant and interesting papers in your field of study.",
                                    "Don't miss out on these valuable features – log in now to get started!",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30
                            }}
                        />
                    </p>
                </div>
                
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                    
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                    </div>
                    <div className="relative mb-4">
                        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                    </div>
                    

                    <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={handleLogin}>Login</button>
                    <p className="text-xs text-gray-500 mt-3">New user? <span>
                        <Link className='text-green-500 underline' href="/signup">Signup</Link></span></p>
                </div>
            </div>
        </section>
    )
}

export default Login