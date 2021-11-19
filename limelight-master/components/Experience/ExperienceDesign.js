import React from "react";
import DesignCard from "./DesignCard";

const ExperienceDesign = () => {
  return (
    <div className="sm:py-28 sm:px-0 px-6 ">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-7xl text-5xl font-bold text-center">
          What exactly is <br /> Experience Design
          <span className="text-[#FFD400]">?</span>{" "}
        </h1>
        <h2 className="pt-6 sm:text-xl text-lg text-gray-600 font-light ">
          It is simply a practice focused on human outcomes.{" "}
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col  justify-evenly sm:pt-20 pt-10 sm:space-y-0  space-y-3">
        <DesignCard
          h1="01"
          h2="Iterative"
          h3="We identify and resolve challenges through cycles of creativity and user research."
        />
        <DesignCard
          h1="02"
          h2="Collaborative"
          h3="Specialists are involved from various design and non-design disciplines, as well as project stakeholders and end users, in the process."
        />
        <DesignCard
          h1="03"
          h2="Measurable"
          h3="We identify both physical and emotional outcomes for the experience, and measure success against these targets."
        />
      </div>
    </div>
  );
};

export default ExperienceDesign;
