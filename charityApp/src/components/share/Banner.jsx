import React from "react";

const Banner = ({ bannerImg, heading, subheading, btn1, btn2 }) => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Banner content */}
        <div className="md:w-2/3">
          <h1 className="text-2xl lg:text-5xl md:text-2xl font-bold text-white mb-4">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{subheading}</p>
          <div className="space-x-5 space-y-4">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
              {btn1}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
              {btn2}
            </button>
          </div>
        </div>
        {/* Banner image */}
        <div className="md:w-1/3 md:ml-auto">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
