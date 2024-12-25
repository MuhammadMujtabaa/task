import React from "react";

const sizeClasses = (size) => {
  switch (size) {
    case "sm":
      return `w-[115px] h-[34px] text-[12px]`;
    case "md":
      return `w-[140px] h-[37px] text-[14px]`;
    case "lg":
      return `w-[147px] h-[39px] text-[16px]`;

    default:
      return "";
  }
};
const Button = ({ icon = null, title = "", size = "md" }) => {
  const mergedClass = `bg-primary outline-none flex justify-center items-center gap-2 rounded-[8px] ${sizeClasses(size)} text-white font-semibold`;
  return (
    <button className={mergedClass}>
      {icon && (
        <div>
          <img src={icon} alt={title} />
        </div>
      )}
      <div>
        <span>{title}</span>
      </div>
    </button>
  );
};

export default Button;
