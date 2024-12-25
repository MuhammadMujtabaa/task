import React from "react";

const NavigationItem = ({ nav }) => {
  return (
    <div>
      <span className={`text-[16px] text-[#737A91] cursor-pointer hover:text-primary hover:font-semibold ${nav.isActive ? " text-primary font-semibold " : " "}`}>
        {nav.title}
      </span>
    </div>
  );
};

export default NavigationItem;
