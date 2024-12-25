import React from "react";
import { profile } from "../../../../../constants";

const StatItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <span className="text-secondary text-[14px] font-semibold">
          {item?.title}
        </span>
      </div>
      <div>
        <span className="text-primary text-[16px] font-semibold">
          {profile?.stats?.[item?.key]}
        </span>
      </div>
    </div>
  );
};

export default StatItem;
