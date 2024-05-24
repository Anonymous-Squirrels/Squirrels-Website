import React from "react";
import Button from "../ui/Button";

function JoinTeam() {
  return (
    <div className="bg-white mx-32 flex items-center justify-between my-10">
      <div>
        <div className="text-3xl font-semibold">
          <span>Become a Squirrel.</span>{" "}
          <span className="text-[#444BD3]">Join our Team.</span>
        </div>
        <span className="text-sm font-light">
          We are looking for individuals with skills who could join our family
          of squirrels.
        </span>
      </div>
      <Button variant="primary" className="mt-4 rounded-lg bg-[#444BD3]">
        Apply Now
      </Button>
    </div>
  );
}

export default JoinTeam;
