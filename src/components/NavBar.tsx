"use client";
// components/Navbar.tsx
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="w-full px-4 py-4 bg-gray-800 text-white flex justify-between items-center relative">
      <div className="text-2xl">Cottage Retreat</div>
      <div
        className={`md:flex md:items-center md:gap-4 ${
          isOpen
            ? "top-0 left-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center"
            : "hidden"
        } md:flex`}
      >
        <a href="#" className="block md:inline-block px-4 py-2">
          Button 1
        </a>
        <a href="#" className="block md:inline-block px-4 py-2">
          Button 2
        </a>
        <a href="#" className="block md:inline-block px-4 py-2">
          Button 3
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
