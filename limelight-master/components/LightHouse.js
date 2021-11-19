import React from "react";
import LightHouseCard from "./LightHouseCard";

const LightHouse = () => {
  return (
    <div className="sm:py-28 sm:px-0 px-6 ">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-7xl text-5xl font-bold ">
          Enter the lighthouse<span className="text-[#FFD400]">.</span>{" "}
        </h1>
        <h2 className="pt-6 sm:text-xl text-lg text-gray-600 font-light ">
          We craft innovative solutions curated specially to your project.
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col  justify-evenly sm:pt-20 pt-10 sm:space-y-0  space-y-4">
        <LightHouseCard
          h1="01"
          h2="Perception Management"
          h3="A practise focused on human outcomes, we identify and resolve challenges through cycles of creativity and user research."
        />
        <LightHouseCard
          h1="02"
          h2="Experience Design"
          h3="Create unique experiences, both temporary and permanent, for people to truly touch, feel and interact with what you offer."
        />
        <LightHouseCard
          h1="03"
          h2="Video Production"
          h3="Do you have a vision for your project? An end-to-end production house lets you bring to life a product, brand or entire PR campaigns."
        />
      </div>
    </div>
  );
};

export default LightHouse;
