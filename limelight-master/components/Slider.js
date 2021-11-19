import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SliderCard from "./SliderCard";

const Slider = ({ head, text, base }) => {
  return (
    <div className="px-4 sm:pt-0 pt-10 sm:py-20">
      <div className="flex flex-col sm:items-center">
        <h1 className="sm:text-7xl text-4xl font-bold ">
          {head}
          <span className="text-[#FFD400]">.</span>{" "}
        </h1>
        <h2 className="pt-6 sm:text-xl text-lg  text-gray-600 font-light ">
          {text}
        </h2>
      </div>
      <div className="overflow-x-auto sm:h-[60vh] h-[50vh] mt-10">
        <div className="h-full sm:w-[2300px] w-[1450px] flex items-center">
          <SliderCard text="Lighting up the Old Age Home on Diwali" src="6" />
          <SliderCard text="Citizen Powered Smart City Development" src="1" />
          <SliderCard text="Changing Attitudes Towards City Hygiene" src="2" />
          <SliderCard
            text="Enlisting Voluntary Teachers in Public Schools"
            src="3"
          />
          <SliderCard
            text="Introducing the world of Jabarra's Healing Hills"
            src="4"
          />
          <SliderCard
            text="Changing a tribal district's image to the world travel"
            src="5"
          />
        </div>
      </div>
      <div>
        <h2 className="flex justify-center pt-6 text-xl text-gray-800 font-semibold ">
          Scroll sideways 'coz why not?
          <span className="font-bold text-2xl text-[#FFD400] mt-[4px] ml-1">
            <MdKeyboardArrowRight />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Slider;
