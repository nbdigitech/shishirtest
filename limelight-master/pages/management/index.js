import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Management/Banner";
import ContentSection from "../../components/Management/ContentSection";
import Slider from "../../components/Slider";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[3rem] lg:container mx-auto">
        <Banner
          head="perception"
          sub="/pəˈsɛpʃ(ə)n/"
          para1=" 1. The ability to see, hear, or become aware of something through
        the senses."
          para2=" 2. The way in which something is regarded, understood, or
        interpreted."
        />
      </div>
      <ContentSection />
      <div className="px-[3rem] lg:container mx-auto">
        <Slider
          head="Case Studies"
          text="Changing people’s perspectives on all things, from products to government policies."
        />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default index;
