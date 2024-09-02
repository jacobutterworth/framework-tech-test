import { cn } from "@/lib/utils";
import React from "react";

interface NavBarButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({
  title,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `font-medium  hover-underline-animation`,
        disabled ? "text-gray-500 cursor-not-allowed" : "text-gray-800 "
      )}
    >
      <span>{title}</span>
    </button>
  );
};

export default NavBarButton;
