import React from "react";
import Button from "../ui/Button";

function Engage() {
  return (
    <div className="bg-[#8F00FF] px-7 md:px-96 py-1 md:py-16 text-white">
      <div className="text-3xl md:text-4xl font-bold text-center my-5">
        Engage Your Audience <br />
        Grow Your Ideas.
      </div>
      <div className="my-5 md:px-32 text-sm text-center">
        Connect with Anonymous Squirrels today to boost your creativity and
        promote your brand with maximum potential.
      </div>
      <div className="text-center my-5">
        <Button className="bg-white rounded-lg text-[#444BD3]">
          Connect with us
        </Button>
      </div>
    </div>
  );
}

export default Engage;
