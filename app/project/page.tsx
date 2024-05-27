"use client";
import HeroSection from "@/components/Project/HeroSection";
import Like from "@/components/Project/Like";
import Main from "@/components/Project/Main";
import React, { useState } from "react";

function Page() {
  const [section, setSection] = useState("All");
  return (
    <div>
      <HeroSection section={section} setSection={setSection} />
      <Main section={section} />
      <Like />
    </div>
  );
}

export default Page;
