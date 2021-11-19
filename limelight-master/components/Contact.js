import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="px-4 flex md:flex-row flex-col pt-10 pb-20 ">
      <div className="flex flex-col flex-1">
        <div className="font-bold lg:text-7xl md:text-6xl text-5xl space-y-2">
          <h2 className="font-medium text-gray-500 text-base">HIRE US</h2>
          <h1>
            Want to know more<span className="text-[#FFD400]">?</span>{" "}
          </h1>
          <h1>
            Drop us a line<span className="text-[#FFD400]">.</span>{" "}
          </h1>
          <h2 className="sm:pt-10 pt-4 sm:text-xl text-base text-gray-600 font-light ">
            A-503, Babylon Tower, VIP Square, Raipur, Chhattisgarh
          </h2>
          <a
            href="#"
            className="underline text-base flex text-blue-600 font-normal"
          >
            <span className="flex mt-1 mr-2">
              <MdOutlineMailOutline />
            </span>
            corplimelight@gmail.com
          </a>
          <a href="#" className=" text-base flex text-blue-600 font-normal">
            <span className="flex mt-1 mr-2">
              <AiOutlinePhone />
            </span>
            +91 911111 9000{" "}
          </a>
        </div>

        <div className="pt-8">
          <div className="sm:flex sm:space-x-4 py-2">
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border-2 border-[E0DEDD] mt-2 rounded-md lg:w-[320px] md:w-[220px] w-full py-2 px-4"
              />
            </div>
            <div className="sm:py-0 py-2">
              <p>Phone</p>
              <input
                type="text"
                placeholder="Enter Mobile number"
                className="border-2 border-[E0DEDD] mt-2 rounded-md lg:w-[320px] md:w-[220px] w-full py-2 px-4"
              />
            </div>
          </div>
          <div className="sm:flex sm:space-x-4 sm:py-2 sm:pb-0 pb-2 ">
            <div>
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter your Email address"
                className="border-2 border-[E0DEDD] mt-2 rounded-md lg:w-[320px] md:w-[220px] w-full py-2 px-4"
              />
            </div>
            <div className="sm:py-0 py-2">
              <p>Subject</p>
              <input
                type="text"
                placeholder="What do you want to talk about?"
                className="border-2 border-[E0DEDD] mt-2 rounded-md lg:w-[320px] md:w-[220px] w-full py-2 px-4"
              />
            </div>
          </div>
          <div className="pt-4">
            <p>Message</p>
            <textarea
              placeholder="Start typing here"
              rows="5"
              className="border-2 border-[E0DEDD] mt-2 rounded-md lg:w-[655px] md:w-[460px] w-full py-2 px-4"
            />
          </div>
          <div>
            <button className="bg-[#FFD400] lg:w-[655px] md:w-[460px] w-full my-4 text-gray-700 font-semibold py-3 px-4 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className=" min-h-[400px] sm:ml-4 flex flex-1 border rounded-xl justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d947764.4479721594!2d81.70586019509214!3d21.888185138029428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1637243859612!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="min-h-[400px]"
          style={{ borderRadius: "10px" }}
          allowFullScreen="true"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
