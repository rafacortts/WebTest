import { NewsFeatures } from "@/utils";
import React from "react";

const Features = () => {
  return (
    <div className="py-16 sm:py-24  ">
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold ">
          Features You Need
        </h2>
        <div className="max-w-3xl mx-auto mt-6">
          <p className="text-center text-lg sm:text-xl">
            Discover the features designed to make your life easier. Explore how our solutions can provide you with the best experience through innovative and user-friendly designs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {NewsFeatures.map(({ title, description }) => (
            <div
              key={title}
              className="border bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-500 rounded-full">
                {/* Add an icon or image here */}
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l2 2m-4-6h8m0 12H4m8-8v6m4-6v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold ">{title}</h3>
              <p className="mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
