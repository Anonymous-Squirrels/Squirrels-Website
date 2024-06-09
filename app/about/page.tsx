import AboutUs from "@/components/About/AboutUs";
import HeroSection from "@/components/About/HeroSection";
import JoinTeam from "@/components/About/JoinTeam";
import OurValues from "@/components/About/OurValues";
import ThreeStepProcess from "@/components/About/ThreeStepProcess";
import React from "react";

function Page() {
  return (
    <div className="w-full ">
      <HeroSection />
      <AboutUs />
      <OurValues />
      <ThreeStepProcess />
      <JoinTeam />
    </div>
  );
}

export default Page;
