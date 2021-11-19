import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const LightHouseCard = ({ h1, h2, h3 }) => {
  return (
    <div className="flex flex-col max-w-[17rem]">
      <div className="h-96">
        <h1 className="text-9xl font-black hover:text-[#FFD400] text-gray-200">
          {h1}
        </h1>
        <h2 className="text-xl font-semibold pt-2">{h2}</h2>
        <h3 className="text-lg font-light text-gray-600 py-10">{h3}</h3>
      </div>

      <div className="hover:text-[#FFD400]">
        <button className="flex justify-center rounded border-2  border-black w-48 py-2 hover:bg-black  hover:w-56">
          How we do it
          <span className="font-bold  text-xl mt-[2px] ml-1">
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LightHouseCard;
