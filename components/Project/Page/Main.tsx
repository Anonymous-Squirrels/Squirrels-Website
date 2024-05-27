import Box from "@/components/ui/Box";
import React from "react";

function Main({ data }: { data: any }) {
  return (
    <div className="bg-black text-white px-20 py-10">
      <div>
        <div className="text-3xl border-b-2 border-[#9656FF] w-56 pb-2 mb-2">
          Overview
        </div>
        <div>{data.overview}</div>
      </div>
      <div className="flex flex-col gap-5">
        <Box>{data.challenge}</Box>
        <div className="flex justify-end">
          <Box>{data.brandIdentityDevelopment}</Box>
        </div>
        <Box>{data.contentMarketing}</Box>
      </div>
      <div>
        <div className="text-3xl border-b-2 border-[#9656FF] w-56 pb-2 mb-2">
          Overview
        </div>
        <div className="flex flex-wrap gap-20 justify-center">
          {data.outcomes.map((outcome: string, index: number) => (
            <div key={outcome} className="m-4">
              <div className="bg-[#7B61FF] text-white w-20 h-20 text-4xl grid place-items-center">
                {1 + index.valueOf()}
              </div>
              <div className="p-4 border w-96">{outcome}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
