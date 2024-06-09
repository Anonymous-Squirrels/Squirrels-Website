import AboutUs from "@/components/About/AboutUs";
import HeroSection from "@/components/About/HeroSection";
import JoinTeam from "@/components/About/JoinTeam";
import OurValues from "@/components/About/OurValues";
import ThreeStepProcess from "@/components/About/ThreeStepProcess";
import ContactUs from "@/components/ContactUs";
import React from "react";

function Page() {
  return (
    <div className="w-full ">
      <HeroSection />
      <AboutUs />
      <OurValues />
      <ThreeStepProcess />
      <JoinTeam />
      <ContactUs />
    </div>
  );
}

export default Page;
