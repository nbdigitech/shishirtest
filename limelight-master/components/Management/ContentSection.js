import React from "react";

const ContentSection = () => {
  return (
    <div>
      <div className=" sm:pt-28 pt-20 flex flex-col sm:items-center">
        <h1 className="sm:text-7xl text-5xl font-bold text-center ">
          So, is it half-empty, <br /> or half-full
          <span className="text-[#FFD400]">?</span>{" "}
        </h1>
        <h2 className="py-6 sm:text-xl text-base text-gray-600 font-light sm:w-[60%] w-[95%]  sm:text-center ">
          Having lived in metros, smaller cities and even towns that have only
          recently started developing into cities, we have developed a uniquely
          keen perspective towards India.
          <br />
          <br />
          From the way people are connected to each other, to the symbiotic
          relationship they have with nature and even small town economics, we
          have worked to brand and dynamically rebrand India’s small towns and
          aspiring cities.
          <br />
          <br />
          Small town dynamics work differently from cities. At the same time
          they have a lot more to offer with a true Indian touch.
        </h2>
        <h2 className="text-black text-xl font-bold">
          Which India do you see around you?
        </h2>
      </div>
      <div className="h-[90vh] border-2 border-black my-20"></div>
    </div>
  );
};

export default ContentSection;
