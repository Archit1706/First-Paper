import Link from 'next/link';
import React, { useState } from 'react'
import { name } from '../data'
import Typewriter from "typewriter-effect";

const Signup = () => {
    const [formData, setFormData] = useState(null);
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSignup = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <section className="text-gray-600">
            <div className="container px-5 h-screen m-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        Welcome to <span className="text-green-500">{name}!</span>
                    </h1>
                    
                    <p className="leading-relaxed mt-4">
                        <Typewriter
                            options={{
                                strings: [
                                    "By signing up, you will have access to personalized recommendations based on your interests and reading history.",
                                    "Our system uses advanced machine learning techniques to surface the most relevant and interesting research papers for you.",
                                    "With our system, you can save time and effort in finding the best papers to read and cite.",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                            }}
                        />
                        </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div className="relative mb-4">
                        <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                    </div>
                    <div className="relative mb-4">
                        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                    </div>
                    <div className="relative mb-4">
                        <label for="cpassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                        <input type="cpassword" id="cpassword" name="cpassword" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                    </div>

                    <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={handleSignup}>Signup</button>
                    <p className="text-xs text-gray-500 mt-3">Already a user? <span>
                        <Link className='text-green-500 underline' href="/login">Login</Link></span></p>
                </div>
            </div>
        </section>
    )
}

export default Signup