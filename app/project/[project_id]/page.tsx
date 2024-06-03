import Like from "@/components/Project/Like";
import HeroSection from "@/components/Project/Page/HeroSection";
import Main from "@/components/Project/Page/Main";
import { GreenCleanSquad, OYO } from "@/constants/ProjectPage";
import React from "react";

function Page({ params }: { params: { project_id: string } }) {
  let data = null;
  switch (params.project_id) {
    case "oyo":
      data = OYO;
      break;
    case "green-clean-squad":
      data = GreenCleanSquad;
      break;
  }
  return (
    <div className="w-screen overflow-hidden">
      <HeroSection title={data?.name} image={data?.image} tag={data?.tags} />
      {data && <Main data={data} />}
      <Like />
    </div>
  );
}

export default Page;
