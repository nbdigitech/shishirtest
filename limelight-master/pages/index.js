import React from "react";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LightHouse from "../components/LightHouse";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:px-[3rem] px-[1rem] lg:container mx-auto pt-20">
        <Banner />
        <LightHouse />
        <Slider
          head="Stuff We Love"
          text=" Some of the project we are proud of, loved working on or simply we
          feel they're cool."
        />
        <Clients />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default index;
