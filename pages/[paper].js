import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

import Link from "next/link";
import { useRouter } from "next/router";
import { fetchedPapers, categoryMap } from "../data";
import Papers from "../components/Papers";

const PaperDetails = () => {
  const router = useRouter();
  const { paper } = router.query;
  let paperData = fetchedPapers.find((p) => p.id === `${paper}`);
  // let paperData = fetchedPapers[0]
  if (!paperData) paperData = fetchedPapers[0];

  let abstractLink = "https://arxiv.org/abs/" + paperData.id;
  let paperLink = "https://arxiv.org/pdf/" + paperData.id + ".pdf";
  return (
    <>
      <section className="text-gray-600 pt-40 md:pt-16">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{paperData.title}</h1>
            <div className="flex my-3 justify-center">
              <div className="w-72 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-500">{paperData.abstract}</p>
          </div>

          <div className="flex flex-wrap justify-center -m-4">

            {/* Authors */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-green-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <BsPeopleFill className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Authors</h2>
                {/* {paperData.authors.map((author, index) => {
                <p className="leading-relaxed text-base">
                  {index + 1}. {author}
                </p>
              })} */}

                <p className="leading-relaxed text-base">{paperData.authors}</p>
              </div>
            </div>

            {/* Category */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-green-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <BiCategoryAlt className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Categories</h2>
                {/* {paperData.categories.map((category, index) => {
                <p className="leading-relaxed text-base">
                  {index + 1}. {categoryMap[category]}
                </p>
              })
              } */}
                <p className="leading-relaxed text-base">{categoryMap[paperData.categories]}</p>
              </div>
            </div>


            {/* Date */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-green-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <MdOutlinePublishedWithChanges className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Published</h2>

                <p className="leading-relaxed text-base">{paperData.update_date}</p>
              </div>
            </div>

          </div>
          <div className="flex flex-row justify-evenly items-center">

            <a href={abstractLink
            } target="_blank">
              <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">arXiv</button>
            </a>
            <a href={paperLink} target="_blank">
              <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">PDF</button>
            </a>
          </div>
        </div>
        <Link className="flex justify-center" href="/#papers">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </section>

      {/* Related Papers */}
      <Papers />
      <Link className="flex justify-center" href="/#papers">
        <p className="underline cursor-pointer pb-4">Back</p>
      </Link>
    </>
  )
}

export default PaperDetails