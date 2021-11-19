import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse sm:pt-10 sm:pb-20 pb-0 sm:px-0 px-6">
      <div className="flex flex-col flex-1 sm:py-20 pb-10 font-bold lg:text-7xl md:text-6xl  text-4xl  space-y-2">
        <h2 className="font-semibold text-lg  ">
          2016 <span className="text-[#FFD400]">-</span> 2021
        </h2>
        <h1>
          Brands<span className="text-[#FFD400]">.</span>{" "}
        </h1>
        <h1>
          Products<span className="text-[#FFD400]">.</span>{" "}
        </h1>
        <h1>
          Smart Cities<span className="text-[#FFD400]">.</span>
        </h1>
        <h1>
          Administration<span className="text-[#FFD400]">.</span>
        </h1>
        <h2 className="pt-6 text-xl text-gray-600 font-light ">
          Bringing your work into limelight for over half a decade.😍
        </h2>
        <div className="text-gray-700 flex space-x-5 text-3xl pt-3">
          <TiSocialFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div className="flex flex-1  sm:py-10 py-6 justify-center items-center">
        <img
          src="/assets/Homepage/banner.png"
          alt="banner"
          className="sm:w-[100%] sm:h-[100%] h-64 w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
