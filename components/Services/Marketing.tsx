import React from "react";
import FAB from "../ui/FAB";
import { ContentMarketing, MarketingConsult, Tick } from "@/constants/Icons";

function Marketing() {
  return (
    <div className="py-10 bg-[#F0E9FB] grid place-items-center">
      <FAB variant="secondary">Marketing</FAB>
      <div className="px-32">
        <div className="mb-10">
          <span className="text-[#5C3095] font-bold">STRATEGIZE</span>
          <br />
          <span className="text-3xl text-black font-bold">Grow your Reach</span>
        </div>
        <div className="w-full flex items-center justify-around gap-10">
          <div className="w-2/5">
            <span className="text-[#5C3095] font-extrabold whitespace-nowrap">
              Content Marketing & Brand Strategy
            </span>
            <div className="text-[#1211275c] mt-5">
              Develop a content strategy that aligns with your brand story and
              resonates with your target audience. We can help with social media
              management, content creation (blog posts, articles, etc.), and
              email marketing.
            </div>
            <ContentMarketing />
            <span className="flex items-center gap-2">
              <Tick />
              Upgrade your customer experience instantly
            </span>
            <span className="flex items-center gap-2">
              <Tick />
              Start with done-for-you setup
            </span>
          </div>
          <div className="w-2/5">
            <span className="text-[#5C3095] font-extrabold whitespace-nowrap">
              Marketing Consultation
            </span>
            <div className="text-[#1211275c] mt-5">
              Need guidance on your overall marketing strategy? Our experienced
              consultants can help you identify opportunities and develop a
              roadmap for success.
            </div>
            <MarketingConsult />
            <div>
              <span className="flex items-center gap-2">
                <Tick />
                Upgrade your customer experience instantly
              </span>
              <span className="flex items-center gap-2">
                <Tick />
                Start with done-for-you setup
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
