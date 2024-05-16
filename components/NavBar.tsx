"use client";
import React from "react";
import GlassMorphism from "./ui/GlassMorphism";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinks } from "@/constants/Navbar";
import { Logo } from "@/constants/Icons";

function NavBar() {
  const path = usePathname();

  return (
    <div className="p-4 bg-black z-10">
      <GlassMorphism
        variant="light"
        className="text-white flex items-center justify-between rounded-lg px-8 h-18"
      >
        <Link href="/" className="flex items-center gap-3">
          <Logo className="" />
          <div className="flex flex-col">
            <span>Anonymous</span>
            <span>Squirrels</span>
          </div>
        </Link>
        <ul className="flex items-center gap-10 group text-lg">
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
      </GlassMorphism>
    </div>
  );
}

export default NavBar;
