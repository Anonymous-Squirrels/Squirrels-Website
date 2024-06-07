"use client";
import React from "react";
import GlassMorphism from "./ui/GlassMorphism";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinks } from "@/constants/Navbar";
import { Logo } from "@/constants/Icons";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
function NavBar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="p-3 md:p-4 bg-black z-10">
      <GlassMorphism
        variant="light"
        className="text-white rounded-lg px-8 h-18"
      >
        <div className="flex items-center justify-between ">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="" />
            <div className="flex flex-col">
              <span>Anonymous</span>
              <span>Squirrels</span>
            </div>
          </Link>
          <ul className="md:flex items-center gap-10 group text-lg hidden">
            {NavLinks.map((item) => (
              <Link
                href={item.path}
                key={item.tag}
                className={`${
                  path === item.path && "text-sq-violet group-hover:text-white"
                }
               hover:text-sq-violet  transition-all duration-300`}
              >
                {item.tag}
              </Link>
            ))}
          </ul>
          <div onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <FiMenu className="h-8 w-8" />
            ) : (
              <IoMdClose className="h-8 w-8" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className=" rounded-lg mt-6 mb-2">
            <ul>
              {NavLinks.map((item) => (
                <Link
                  href={item.path}
                  key={item.tag}
                  className="block text-center font-medium text-lg my-4"
                >
                  {item.tag}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </GlassMorphism>
    </div>
  );
}

export default NavBar;
