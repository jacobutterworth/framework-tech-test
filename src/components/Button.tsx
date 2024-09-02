import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  showArrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title: label,
  onClick,
  disabled,
  showArrow = true,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `group px-6 py-2 flex items-center justify-center gap-2 rounded-[60px] border-[1px] text-sm font-medium transition-all duration-300`,
        disabled
          ? "border-gray-300 text-gray-300 cursor-not-allowed"
          : "border-green-100 text-green-100 hover:bg-green-100 hover:text-white active:text-white"
      )}
    >
      {label}
      {showArrow && (
        <span className="ml-2 transform inline-block transition-transform duration-300">
          <svg
            width="28"
            height="12"
            viewBox="0 0 28 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6H26.5M26.5 6L21.5 1M26.5 6L21.5 11"
              stroke="#2E4845"
              className="group-hover:stroke-white transition-colors duration-300"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;
