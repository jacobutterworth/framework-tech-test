"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import NavBarButton from "./NavBarButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-4 text-white">
      <div className="flex justify-between items-center">
        <span className="title-text text-green-100">COTTAGE RETREAT</span>

        <div className="hidden md:flex md:items-center md:gap-4">
          <NavBarButton title="Nav Button 01" />
          <NavBarButton title="Nav Button 02" />
          <NavBarButton title="Nav Button 03" />
        </div>

        <button
          className="md:hidden text-2xl text-green-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-green-100 flex flex-col",
          "transition-opacity duration-300 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-end z-50 md:px-28 px-4 py-4">
          <button
            className="absolute md:px-28 px-5 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <div
          className={cn(
            "flex flex-col items-center gap-4",
            "transition-transform duration-300 ease-in-out",
            isOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <NavBarButton title="Nav Button 01" />
          <NavBarButton title="Nav Button 02" />
          <NavBarButton title="Nav Button 03" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
