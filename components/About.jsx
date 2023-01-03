import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMindMap } from "react-icons/ri";
import { SiAuthy } from "react-icons/si";
import { name, projectLinks } from "../data";

const About = () => {
    return (
        <div id="about" className="pt-40 md:pt-24">
            <section className="text-gray-600">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                            About Us
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                            <span className="inline-block text-green-600">
                                {name}
                            </span>{" "}
                            is a place where students, professors, researchers,
                            learners or anyone who aims to write a research
                            paper and is unsure about the domain, subject or
                            topic to choose or wants to gather existing research
                            work and can get suggestions based on their search
                            queries run through our ML model.
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="px-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                <GiReceiveMoney className="w-10 h-10" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Free Service
                                </h2>
                                <p className="leading-relaxed text-base">
                                    {name} is completely free of cost for all
                                    the folks who are willing to learn and grow.
                                </p>
                            </div>
                        </div>
                        <div className="px-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                <SiAuthy className="w-10 h-10" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Authenticity
                                </h2>
                                <p className="leading-relaxed text-base">
                                    {name} is backed by the latest research
                                    paper databases like arxiv, ieee, springer,
                                    etc. and is updated regularly to provide
                                    only 100% authentic and genuine papers.
                                </p>
                            </div>
                        </div>
                        <div className="px-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                <RiMindMap className="w-10 h-10" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Personalization
                                </h2>
                                <p className="leading-relaxed text-base">
                                    {name} provides personalized suggestions
                                    based on the content based filtering
                                    algorithm which makes it more accurate.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a target="_blank" href={projectLinks.github}>
                        <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Code
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
