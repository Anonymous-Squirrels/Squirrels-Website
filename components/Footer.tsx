"use client";
import {MainLogo} from "@/constants/Icons";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  }
]

function Footer() {
  const [email, setEmail] = React.useState("");
  return (
    <div className="bg-[#0F0F0F] text-white md:px-20 pt-20 pb-10 cursor-default text-center md:text-justify">
      <div className="flex flex-col md:flex-row justify-around pb-5 border-b border-[#333333] mb-5 gap-y-5 px-10">
        <div className="w-full md:w-fit flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-5 text-center">
            <MainLogo/>
            <span className="text-2xl">Anonymous Squirrels</span>
          </div>
          <div className="text-[#B9B3B3] text-center md:text-left ">
            <span className="font-thin">We help build brands.</span>
            <br/>
            <span className="font-medium">Connect. Promote. Engage. Grow.</span>
            <br className="md:hidden"/>
            <br className=""/>
          </div>
          <div className="flex items-center gap-2 relative md:-left-16 mt-2">
            <a href="https://www.linkedin.com/company/anonymous-squirrels/?viewAsMember=true" target="_blank"
               rel="noopener noreferrer">
              <Image
                src="/logo/linkedin.png"
                alt="logo"
                width={30}
                height={30}
              />
            </a>

            <a href="https://api.whatsapp.com/send?phone=919122823474" target="_blank" rel="noopener noreferrer">
              <Image
                src="/logo/whatsapp.png"
                alt="logo"
                width={30}
                height={30}
              />
            </a>

            <a href="https://www.instagram.com/anonymous_squirrels/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/logo/instagramLogo.png"
                alt="logo"
                width={30}
                height={30}
              />
            </a>
            <a href="https://linktr.ee/kingshukbanerjee/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/logo/LinkTree.png"
                alt="logo"
                width={30}
                height={30}
                className="rounded-lg"
              />
            </a>
          </div>
        </div>

        <div>
          <div className="font-medium mb-5">Company</div>
          <ul className="font-thin text-[#B9B3B3]">
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              Service
            </li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              About US
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-5">Help</div>
          <ul className="font-thin text-[#B9B3B3]">
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              Customer Support
            </li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div>
          <span className="font-medium block mb-5">Contact Us</span>

          <div className="inline-flex items-center text-sm justify-center rounded-lg overflow-hidden h-10">
            <Input
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              classNameDiv="bg-[#242424]"
              classNameInput="w-60 h-10"
            />
            <Button
              variant="primary"
              className="w-20 h-full md:h-auto rounded-none"
              // onClick={() =>
              // TODO : send email
              // }
            >
              Join
            </Button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col items-center justify-center gap-x-3">
        <p className="w-fit text-center text-sm hidden md:flex">Made with love 💓 by</p>
        <p className="w-fit text-center text-base flex md:hidden text-md">Made by</p>
        <div className="w-fit h-fit flex items-center justify justify-center py-4">
          <AnimatedTooltip items={people}/>
        </div>
      </div>
      <div className="w-full text-center text-sm font-thin px-4">
        &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by
        Anonymous Squirrels
      </div>


    </div>
  );
}

export default Footer;
