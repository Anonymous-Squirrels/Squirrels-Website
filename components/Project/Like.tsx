import React from "react";
import Button from "../ui/Button";

function Like() {
  return (
    <div className="bg-white my-20 mx-56">
      <div className="text-4xl text-center font-semibold">
        <span>Liked what you saw?</span>{" "}
        <span className="text-[#444BD3]">Get one for yourself.</span>
      </div>
      <div className="text-center text-sm text-gray-400">
        We are looking for individuals with skills who could join our family of
        squirrels.
      </div>
      <div className="text-center mt-5">
        <Button className="bg-[#444BD3] text-white rounded-lg">
          Apply Here
        </Button>
      </div>
    </div>
  );
}

export default Like;
