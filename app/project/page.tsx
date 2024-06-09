"use client";
import HeroSection from "@/components/Project/HeroSection";
import Like from "@/components/Project/Like";
import Main from "@/components/Project/Main";
import React, { useState } from "react";

function Page() {
  const [section, setSection] = useState("All");

  return (
    <div className="w-[100%] h-fit ">
      <HeroSection section={section} setSection={setSection} />
      <Main section={section} />
      <Like />
    </div>
  );
}

export default Page;
