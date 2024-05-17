import { MainLogo } from "@/constants/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

function Footer() {
  return (
    <div className="bg-[#0F0F0F] text-white px-20 pt-20 pb-10">
      <div className="flex justify-around pb-5 border-b mb-5">
        <div>
          <div className="flex items-center gap-2">
            <MainLogo />
            <span>Anonymous Squirrels</span>
          </div>
          <div className="text-[#B9B3B3]">
            <span className="font-thin">We help build brands.</span>
            <br />
            <span className="font-medium">Connect. Promote. Engage. Grow.</span>
          </div>
          <div className="flex items-center gap-2">
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
          <span className="font-medium">Company</span>
          <ul className="font-thin">
            <li>Service</li>
            <li>Contact Us</li>
            <li>About US</li>
          </ul>
        </div>
        <div>
          <span className="font-medium">Help</span>
          <ul className="font-thin">
            <li>Customer Suppport</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <span className="font-medium">Contact Us</span>
          <div className="flex items-center rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter email address"
              className="bg-[#242424] outline-none border-none h-10 px-5"
            />
            <Button variant="primary" className="rounded-none h-10 px-10 py-2">
              Join
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-thin">
        &copy; Copyright 2024, All Rights Reserved by Anonymous Squirrels
      </div>
    </div>
  );
}

export default Footer;
