import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Management/Banner";
import ContentSection from "../../components/Management/ContentSection";
import Slider from "../../components/Slider";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import ExperienceDesign from "../../components/Experience/ExperienceDesign";
import IceBerg from "../../components/Experience/IceBerg";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[3rem] lg:container mx-auto">
        <Banner
          head="experience"
          sub="/ɪkˈspɪərɪəns, ɛkˈspɪərɪəns/"
          para1=" 1. An event or occurrence which leaves an impression on someone."
        />
      </div>
      <div className="px-[3rem] lg:container mx-auto">
        <ExperienceDesign />
        <Slider
          head="Case Studies"
          text="Changing people’s perspectives on all things, from products to government policies."
        />
        <IceBerg />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default index;
