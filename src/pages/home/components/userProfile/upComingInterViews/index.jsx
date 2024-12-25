import React from "react";
import arrowDown from "../../../../../assets/images/arrowDown.svg";
import { labels } from "../../../../../locales";
const UpComingInterViews = () => {
  return (
    <div className="flex justify-between items-center p-[10px] bg-white rounded-[10px]">
      <div>
        <div>
          <span className="text-black font-bold text-[16px]">
            {labels.myCalendar}
          </span>
        </div>
        <div>
          <span className="text-[#737A91] text-[14px]">
            {labels.upcomingInterviews}
          </span>
        </div>
      </div>
      <div>
        <img src={arrowDown} />
      </div>
    </div>
  );
};

export default UpComingInterViews;
