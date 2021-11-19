import React from "react";

const Banner = ({ head, sub, para1, para2 }) => {
  return (
    <div className="flex sm:flex-row flex-col mt-28 ">
      <div className="flex flex-1 "></div>
      <div className="flex flex-1 justify-center flex-col py-28  sm:px-6">
        <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold py-6">
          {head}
        </h1>
        <h2 className="text-3xl font-semibold pb-4">{sub}</h2>
        <div className="text-gray-500 pt-6">
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
