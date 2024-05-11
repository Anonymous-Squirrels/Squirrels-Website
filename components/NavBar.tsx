"use client";
import React from "react";
import GlassMorphism from "./GlassMorphism";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinks } from "@/constants/Navbar";

function NavBar() {
  const path = usePathname();

  return (
    <div className="p-4">
      <GlassMorphism
        variant="light"
        className="text-white flex items-center justify-between rounded-lg"
      >
        <>Image</>
        <ul className="flex items-center gap-5 group">
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
