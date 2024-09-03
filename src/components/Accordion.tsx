"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4 w-full ">
      {items.map((item, index) => (
        <div key={item.id} className="border-b border-white-300 pb-4">
          <div
            className="flex justify-between items-center py-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center gap-2 flex-grow overflow-hidden">
              <span className="text-gray-500 text-lg flex-shrink-0">{`0${item.id}`}</span>
              <h3 className="text-lg font-medium text-green-100 flex-wrap mx-4">
                {item.title}
              </h3>
            </div>
            <div className="flex-shrink-0 relative w-6 h-6">
              <span
                className={cn(
                  `absolute inset-0 text-2xl text-green-100 transition-opacity duration-300 ease-in-out`,
                  activeIndex === index ? "opacity-0" : "opacity-100"
                )}
              >
                +
              </span>
              <span
                className={cn(
                  `absolute inset-0 text-2xl text-green-100 transition-opacity duration-300 ease-in-out`,
                  activeIndex === index ? "opacity-100" : "opacity-0"
                )}
              >
                −
              </span>
            </div>
          </div>
          <div
            className={cn(
              `pl-10 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out`,
              activeIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="overflow-y-auto copy max-h-96">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
