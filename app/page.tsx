import AboutUs from "@/components/Home/AboutUs";
import { BentoBox } from "@/components/Home/BentoBox";
import ContactUs from "@/components/Home/ContactUs";
import Engage from "@/components/Home/Engage";
import Home from "@/components/Home/HeroSection";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";

function Page() {
  return (
    <div className="scrollbar-hide">
      <Home />
      <Engage />
      <AboutUs />
      <BentoBox />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default Page;
