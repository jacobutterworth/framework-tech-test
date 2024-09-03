"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import NavBarButton from "./NavBarButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 text-white">
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
        {/* <div className="flex justify-start"></div> */}

        <div className="flex justify-between items-center z-50 md:px-28 px-4 py-4">
          <span className="title-text md:px-28 px-5 text-white-100">
            COTTAGE RETREAT
          </span>
          <button
            className="md:px-28 px-5 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <div
          className={cn(
            "flex flex-col items-start mx-9 gap-4 mt-12",
            "transition-transform duration-300 ease-in-out",
            isOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <NavBarButton
            title="Nav Button 01"
            manualTextColor="text-white-100"
          />
          <NavBarButton
            title="Nav Button 02"
            manualTextColor="text-white-100"
          />
          <NavBarButton
            title="Nav Button 03"
            manualTextColor="text-white-100"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
