"use client";
import { MainLogo } from "@/constants/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

function Footer() {
  const [email, setEmail] = React.useState("");
  return (
    <div className="bg-[#0F0F0F] text-white md:px-20 pt-20 pb-10">
      <div className="flex flex-col md:flex-row justify-around pb-5 border-b border-[#333333] mb-5 gap-y-5 px-10">
        <div className="w-full md:w-fit flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-5 text-center">
            <MainLogo />
            <span className="text-2xl">Anonymous Squirrels</span>
          </div>
          <div className="text-[#B9B3B3] text-center md:text-left">
            <span className="font-thin">We help build brands.</span>
            <br />
            <span className="font-medium">Connect. Promote. Engage. Grow.</span>
            <br className="md:hidden"/>
            <br className=""/>
          </div>
          <div className="flex items-center gap-2 relative md:-left-16">
            <Link href="#">
              <Image src="/logo/x.png" alt="logo" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image
                src="/logo/facebook.png"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/logo/linkedin.png"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/logo/whatsapp.png"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>

        <div>
          <span className="font-medium block mb-5">Company</span>
          <ul className="font-thin">
            <li>Service</li>
            <li>Contact Us</li>
            <li>About US</li>
          </ul>
        </div>
        <div>
          <span className="font-medium block mb-5">Help</span>
          <ul className="font-thin">
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <span className="font-medium block mb-5">Contact Us</span>
          <div className="flex items-center rounded-lg overflow-hidden">
            <Input
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={() => setEmail(email)}
              classNameDiv="bg-[#242424]"
              classNameInput="h-10 px-4 w-60 text-sm"
            />
            <Button variant="primary" className="rounded-none h-10 px-10 py-2">
              Join
            </Button>
          </div>
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
