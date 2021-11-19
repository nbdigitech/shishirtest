import React from "react";

const IceBerg = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse pt-10 sm:pb-28 pb-0 sm:px-0 px-6">
      <div className="flex flex-col flex-1 sm:py-20 py-10 font-bold lg:text-7xl md:text-6xl  text-5xl  space-y-2">
        <h1>
          ...and this is just the <br /> tip of the iceberg.
          <span className="text-[#FFD400]">.</span>{" "}
        </h1>
        <h2 className="pt-6 text-lg text-gray-500 font-normal">
          Tier 2 and Rural India comprises of a massive chunk of our country.
          The dynamics of these populaces is unlike cities, yet define most of
          how our nation functions.
          <br /> <br />
          We create powerful experiences for these ecosystems, both for their
          residents as well as visitors looking to explore the heart of India.
          <br /> <br />
          <strong className="text-black">
            The first ever citizen engagement programme that was powered solely
            by over 5000 students across 30+ institutions of the city.
          </strong>
          <br /> <br />
          We have empowered citizen groups and connected people of various
          groups and segments such as students, businessmen, institutions, NGOs
          etc. with cityand state administrations in order to create a sense of
          belonging and ownership in the development of the city.
        </h2>
      </div>
      <div className="flex flex-1 border-2 border-black py-20 justify-center items-center sm:ml-10"></div>
    </div>
  );
};

export default IceBerg;
