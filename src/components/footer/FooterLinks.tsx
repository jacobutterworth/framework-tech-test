import React from "react";

const FooterLinks: React.FC = () => {
  return (
    <div className="copy-s text-left text-green-100">
      <div>
        <p>Company name © 2023. All rights Reserved.</p>
        <p className="">
          Design by{" "}
          <span
            className={
              "font-semibold cursor-pointer hover:text-[#D3DDC6] active:text-[#D3DDC6]"
            }
          >
            Framework.
          </span>
        </p>
      </div>
    </div>
  );
};

export default FooterLinks;
