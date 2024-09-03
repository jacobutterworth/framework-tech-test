import { cn } from "@/lib/utils";
import React from "react";
import { TextColor } from "@/types/ui";

interface NavBarButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  manualTextColor?: TextColor;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({
  title,
  onClick,
  disabled,
  manualTextColor,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `font-medium hover-underline-animation`,
        disabled
          ? "text-gray-500 cursor-not-allowed"
          : manualTextColor && manualTextColor.length > 0
          ? manualTextColor
          : "text-gray-800 "
      )}
    >
      <h2 className="md:hidden">{title}</h2>
      <span className="hidden md:inline copy">{title}</span>{" "}
    </button>
  );
};

export default NavBarButton;
