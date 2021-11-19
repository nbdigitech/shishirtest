import React from "react";
import ImageCard from "./ImageCard";

const Clients = () => {
  return (
    <div className="">
      <div className=" px-4 sm:pt-20 pt-20 flex flex-col sm:items-center">
        <h1 className="sm:text-7xl text-5xl font-bold ">
          Our Clients<span className="text-[#FFD400]">.</span>{" "}
        </h1>
        <h2 className="py-6 sm:text-xl text-base text-gray-600 font-light sm:w-[80%] w-[95%]  sm:text-center ">
          We are not simply designers or cinematographers. We’re storytellers.
          We change perceptions, create impactful visuals and generate
          gamechanging experiences for our clients. When we say integrated,
          we’re not just talking digital. We integrate content, communication
          and creation across platforms and technologies to create the impact
          you look for in a campaign.
        </h2>
      </div>
      <div className=" flex justify-center items-center flex-wrap">
        <ImageCard src="1" />
        <ImageCard src="2" />
        <ImageCard src="3" />
        <ImageCard src="4" />
        <ImageCard src="5" />
        <ImageCard src="6" />
        <ImageCard src="7" />
        <ImageCard src="8" />
        <ImageCard src="9" />
        <ImageCard src="10" />
        <ImageCard src="11" />
        <ImageCard src="12" />
      </div>
    </div>
  );
};

export default Clients;
