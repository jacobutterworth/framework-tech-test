"use client";
import { cn } from "@/lib/utils";
// components/Navbar.tsx
import { useState } from "react";
import NavBarButton from "./NavBarButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 py-4 text-white flex justify-between items-center relative">
      <span className="title-text text-green-100">COTTAGE RETREAT</span>
      <div
        className={cn(
          `md:flex md:items-center md:gap-4 md:h-auto`,
          isOpen
            ? "top-0 left-0 w-screen h-screen bg-green-100 flex flex-col"
            : "hidden"
        )}
      >
        <NavBarButton title="Nav Button 01" />
        <NavBarButton title="Nav Button 02" />
        <NavBarButton title="Nav Button 03" />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-green-100"
        >
          &#9776;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
