import React from "react";
import { labels } from "../../../../../../locales";
import Button from "../../../../../../components/button";

const JobCard = ({ jobItem }) => {
  return (
    <div className="rounded-[10px] bg-white p-5">
      {jobItem?.isPromoted && <div><span className="text-dark font-semibold">{labels.promoted}</span></div>}
      <div className="flex items-center gap-3">
        <div>
          <img className="w-[23px] object-contain" src={jobItem?.company?.logo}/>
        </div>
        <div>
          <div>
            <span className="text-[14px]">{jobItem?.title}</span>
          </div>
          <div>
            <span className="text-[12px] capitalize">{jobItem?.company?.name}</span>
          </div>
        </div>
      </div>
      <div className="space-x-2 text-text">
        <span>{jobItem?.location}</span>
        <span>({jobItem?.locationType})</span>
      </div>
      <div className="space-x-2 text-text divide-x text-[12px]">
        <span>1 day ago</span>
        <span className="pl-2 text-primary">{jobItem?.numberOfApplicants} {labels.applicants}</span>
      </div>
      <div className="mt-4">
        <Button title={labels.applyNow} size="sm"/>
      </div>
    </div>
  );
};

export default JobCard;
