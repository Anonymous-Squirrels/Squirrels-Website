import React from "react";
import styles from "@/style/Services.module.css";
import Button from "../ui/Button";
import { ArrowRight, DownArrow } from "@/constants/Icons";

function HeroSection() {
  return (
    <div className="h-[85vh] bg-black text-white grid place-items-center">
      <div className="relative">
        <div className={styles.blob}></div>
        <div className="text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid place-items-center gap-10">
          <div className="text-7xl font-semibold w-[50vw]">
            We Provide Services. A Lot...
          </div>
          <div className="text-[#C1C1C1] text-sm">
            Enhance every aspect of your business sales, ensuring <br />
            satisfaction, loyalty, and unparalleled service.
          </div>
          <div className="grid place-items-center">
            <Button
              variant="secondary"
              className="text-white flex items-center gap-3 group"
            >
              Contact Us{" "}
              <ArrowRight className=" group-hover:rotate-45 transition-all duration-300" />
            </Button>
          </div>
        </div>
      </div>
      <div className="animate-bounce">
        <DownArrow />
      </div>
    </div>
  );
}

export default HeroSection;
