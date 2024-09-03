import React from "react";
import { TextColor } from "@/types/ui";
import { cn } from "@/lib/utils";

type LegalLinksProps = {
  manualTextColor?: TextColor;
};

const LegalLinks: React.FC<LegalLinksProps> = ({ manualTextColor }) => {
  return (
    <div
      className={cn(
        "text-right flex flex-col gap-2 md:ml-auto",
        manualTextColor && manualTextColor.length > 0
          ? manualTextColor
          : "md:text-green-100 text-white-100 "
      )}
    >
      <span className="copy-s md:self-end">Privacy</span>
      <span className="copy-s md:self-end">Terms and Conditions</span>
    </div>
  );
};

export default LegalLinks;
