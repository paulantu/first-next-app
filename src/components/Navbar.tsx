"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/php-with-laravel">PHP with Laravel</HoveredLink>
            <HoveredLink href="/mern">MERN</HoveredLink>
            <HoveredLink href="/frontend-web-development">
              Frontend web development
            </HoveredLink>
            <HoveredLink href="/backend-web-development">
              Backend Web Development
            </HoveredLink>
            <HoveredLink href="/full-stack-web-development">
              Full-stack Web Development
            </HoveredLink>
            <HoveredLink href="/devops">Devops</HoveredLink>
            <HoveredLink href="/grapgics-design">Graphics Design</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact-us"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
