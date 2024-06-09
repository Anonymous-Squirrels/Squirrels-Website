import Box from "@/components/ui/Box";
import React from "react";

function Main({data}: { data: any }) {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-10 md:mb-7">
      <div className="mb-9 md:mb-12">
        <div className="text-3xl border-b-2 border-[#9656FF] w-56 pb-2 mb-4">
          Overview
        </div>
        <div className="md:text-xl">{data.overview}</div>
      </div>

      <div className="flex flex-col gap-5 mb-5">
        <Box className="w-full mx-auto md:m-6 md:w-2/5">{data.challenge}</Box>
        <Box className="w-full mx-auto md:m-6 md:w-2/5 md:self-end">{data.brandIdentityDevelopment}</Box>
        <Box className="w-full mx-auto md:m-6 md:w-2/5">{data.contentMarketing}</Box>
      </div>

      <div className="md:mb-10">
        <div className="text-3xl border-b-2 border-[#9656FF] w-56 pb-2 mb-7 md:mb-10">
          Outcomes
        </div>
        <div className="w-full flex flex-wrap gap-10 md:gap-20 justify-center">
          {data.outcomes.map((outcome: string, index: number) => (
            <div key={outcome} className={`w-full md:w-[460px]  ${index === 2 && "md:w-[600px] md:h-fit"}`}>
              <div className="bg-[#7B61FF] text-white w-20 h-20 text-4xl grid place-items-center">
                {1 + index.valueOf()}
              </div>
              <div className={`p-4 md:p-6 border w-full md:text-2xl `}>{outcome}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
