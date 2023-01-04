import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fetchedPapers, categoryMap, categories } from "../data";
import PaperSkeleton from "../skeletons/PaperSkeleton";
import imageGenerator from "../utils/ImageGenerator";
import { useRouter } from "next/router";

const Papers = () => {
    const { query } = useRouter();
    const [papers, setPapers] = useState(null);
    useEffect(() => {
        // fetch papers from backend

        console.log("fetching papers");
        setTimeout(async () => {
            const data = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            ).then((response) => response.json());
            setPapers(fetchedPapers);
        }, 5000);
        console.log(papers);
    });
    return (
        <>
            <section id="papers" class="text-gray-600 pt-20">
                <div className="flex flex-col items-center w-full mb-3 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-bold mb-2">
                        Our Recommendations
                    </h1>
                    <div className="h-1 w-20 bg-green-500 rounded"></div>
                </div>
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {papers &&
                            papers.map((paper, index) => {
                                return (
                                    <div class="p-4 lg:w-1/3">
                                        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-left relative">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                {/* {categories.map(
                                                    (category) =>
                                                        categoryMap[category] + " "
                                                )} */}
                                                {categoryMap[paper.categories]}
                                            </h2>
                                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                                {paper.title}
                                            </h1>
                                            <p class="leading-relaxed mb-3">
                                                {paper.abstract.length > 250
                                                    ? paper.abstract.substring(
                                                          0,
                                                          250
                                                      ) + "..."
                                                    : paper.abstract}
                                            </p>
                                            <Link
                                                href={paper.id}
                                                class="text-green-500 inline-flex items-center"
                                            >
                                                Read More
                                                <svg
                                                    class="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>

                                            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg
                                                        class="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="3"
                                                        ></circle>
                                                    </svg>
                                                    1.2K
                                                </span>
                                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg
                                                        class="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                    6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        {!papers && (
                            <>
                                <PaperSkeleton />
                                <PaperSkeleton />
                                <PaperSkeleton />
                                <PaperSkeleton />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Papers;
