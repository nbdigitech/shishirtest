import React from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:px-[3rem] px-[1rem] lg:container mx-auto pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default index;
