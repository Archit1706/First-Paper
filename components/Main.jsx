import React, { useState, useEffect } from "react";
import { categories } from "../data";
import Typewriter from "typewriter-effect";

const Main = () => {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Initialize state for form inputs
    const [formData, setFormData] = useState({});

    useEffect(() => {
        // console.log(formData);
    }, [formData]);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div
            id="home"
            className="text-gray-600 rounded px-8 pt-40 md:pt-24 pb-8 mb-4 flex flex-col my-2"
        >
            <div className="App">
                <h1 className="text-3xl font-bold text-center mb-4">
                    Search papers based on{" "}
                    <span className="text-green-500 inline-flex">
                        <Typewriter
                            options={{
                                strings: [
                                    "Topic",
                                    "Authors",
                                    "Subjects",
                                    "Date Range",
                                    "or All",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
            </div>

            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block leading-7 text-sm text-gray-600">
                        Topic
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text"
                        placeholder="Infrared, Covid-19, etc."
                        name="topic"
                        onChange={changeHandler}
                    />
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block leading-7 text-sm text-gray-600">
                        Authors
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text"
                        name="authors"
                        placeholder="James Belk, S. K. Gupta, etc."
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label
                        className="block leading-7 text-sm text-gray-600"
                        htmlFor="grid-state"
                    >
                        Subjects
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={changeHandler}
                        >
                            <option></option>
                            {categories.map((value, index) => {
                                return <option key={index}>{value}</option>;
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block leading-7 text-sm text-gray-600"
                        htmlFor="grid-city"
                    >
                        Start Date
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="date"
                        name="startDate"
                        placeholder="01-01-1990"
                        onChange={changeHandler}
                    />
                </div>

                <div className="md:w-1/2 px-3">
                    <label className="block leading-7 text-sm text-gray-600">
                        End Date
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="date"
                        name="endDate"
                        placeholder="31-12-2022"
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="flex items-center py-6">
                <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Main;
