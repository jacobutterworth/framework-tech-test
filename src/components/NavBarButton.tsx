import { cn } from "@/lib/utils";
import React from "react";
import { Colors } from "@/types/ui";

export type TextColor = `text-${Colors}`;

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
      <span className="copy">{title}</span>
    </button>
  );
};

export default NavBarButton;
