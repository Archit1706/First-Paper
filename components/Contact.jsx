import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { team } from "../data";
import { BsFillFilePersonFill } from "react-icons/bs";

const Contact = () => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="text-gray-600 relative pt-24 md:pt-0">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">
                        Contact Us
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Want to suggest changes or submit a your research paper?
                    </p>
                    <p>Feel free to contact us.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
                    </div>
                </div>

                <form className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    onChange={changeHandler}
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Submit
                            </button>
                        </div>

                        <div className="mx-auto my-4">
                            <p className="font-bold text-center text-green-500">
                                OR
                            </p>
                        </div>

                        <section className="text-gray-600">
                            <div className="container px-5 py-4 mx-auto">
                                <div className="flex flex-col text-center w-full mb-10">
                                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                                        Our Team
                                    </h1>
                                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base italic">
                                        &quot; No one can whistle a symphony. It
                                        takes a whole orchestra to play it{" "}
                                        &quot; - H.E. Luccock
                                    </p>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    {team.map((member, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="p-4 w-1/2"
                                            >
                                                <div className="h-full flex flex-col items-center text-center">
                                                    {member.img ? (
                                                        <img
                                                            alt={member.name}
                                                            className="flex-shrink-0 rounded-lg w-8/12 h-56 object-cover object-center mb-2"
                                                            src={member.img}
                                                        />
                                                    ) : (
                                                        <BsFillFilePersonFill className="flex-shrink-0 rounded-lg w-8/12 h-56 object-cover object-center mb-2 text-green-500 hover:text-green-600" />
                                                    )}

                                                    <div className="w-full">
                                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                                            {member.name}
                                                        </h2>
                                                        <h3 className="text-gray-500 mb-3">
                                                            {member.tag}
                                                        </h3>
                                                        <p className="mb-4">
                                                            {member.intro}
                                                        </p>
                                                        <span className="inline-flex">
                                                            <a
                                                                href={
                                                                    member.github
                                                                }
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                <FaGithub className="w-5 h-5" />
                                                            </a>
                                                            <a
                                                                href={
                                                                    member.linkedin
                                                                }
                                                                className="ml-4 text-gray-500 hover:text-green-500"
                                                            >
                                                                <FaLinkedinIn className="w-5 h-5" />
                                                            </a>
                                                            <a
                                                                href={
                                                                    member.twitter
                                                                }
                                                                className="ml-4 text-gray-500 hover:text-green-500"
                                                            >
                                                                <FaTwitter className="w-5 h-5" />
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
