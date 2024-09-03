import React from "react";

const LegalLinks: React.FC = () => {
  return (
    <div className="text-right md:text-green-100 text-white-100 flex flex-col gap-2 md:ml-auto">
      <span className="copy-s md:self-end">Privacy</span>
      <span className="copy-s md:self-end">Terms and Conditions</span>
    </div>
  );
};

export default LegalLinks;
