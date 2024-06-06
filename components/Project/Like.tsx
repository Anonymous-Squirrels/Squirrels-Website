import React from "react";
import Button from "../ui/Button";

function Like() {
  return (
    <div className="bg-white my-5 md:my-20 px-4 md:mx-56">
      <div className="text-lg md:text-4xl text-center font-semibold">
        <span>Liked what you saw?</span>{" "}
        <span className="text-[#444BD3]">Get one for yourself.</span>
      </div>
      <br/>
      <div className="text-center text-xs md:text-lg text-gray-400 px-[5px] ">
        We are looking for individuals with skills who could join our family of
        squirrels.
      </div>
      <div className="text-center mt-5">
        <Button className="bg-[#444BD3] text-white text-sm md:text-base rounded-lg">
          Apply Here
        </Button>
      </div>
    </div>
  );
}

export default Like;
