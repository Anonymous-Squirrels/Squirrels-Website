import { BentoBox } from "@/components/BentoBox";
import Home from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import React from "react";

function Page() {
  return (
    <div>
      <Home />
      <BentoBox />
      <Testimonials />
    </div>
  );
}

export default Page;
