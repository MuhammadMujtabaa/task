import React from "react";
import arrowDown from "../../../../../assets/images/arrowDown.svg";
import searchWhite from "../../../../../assets/images/searchWhite.svg";
import Button from "../../../../../components/button";
import { jobKeyWords, jobs, profile } from "../../../../../constants";
import { labels } from "../../../../../locales";
import JobCard from "./jobCard";

const JobSection = () => {
  return (
    <div className="space-y-5 divide-y">
      <div className="space-y-3">
        <div>
          <div>
            <span className="text-black text-[22px] font-semibold">
              {labels.findYourDreamJob},{" "}
              <span className="text-primary">{profile.firstName}</span>
            </span>
          </div>
        </div>
        <div className="gap-3 flex flex-wrap items-center">
          <div>
            <span className="text-[#737A91] text-[12px]">
              {labels.similar} :
            </span>
          </div>
          {jobKeyWords.map((keyword) => (
            <button
              key={keyword.id}
              className="h-[30px] rounded-[5px] text-center border border-[#737A91] text-[12px] px-5 text-[#737A91]"
            >
              {keyword?.title}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-[10px] p-[20px] flex justify-between items-center flex-wrap gap-3">
          <div>
            <span className="text-[#585D6E]">
              {labels.jobTitleCompanyOrKeywords}
            </span>
          </div>
          <div className="flex gap-5 flex-wrap">
            <div className="flex divide-x items-center flex-wrap flex-row gap-5">
              <div className="flex items-center gap-5 justify-between md:w-auto w-full">
                <span className="text-[#585D6E]">{labels.selectLocation}</span>
                <img className="mt-2" src={arrowDown} />
              </div>
              <div className="flex items-center gap-5 justify-between md:w-auto w-full">
                <span className="text-[#585D6E]">{labels.jobType}</span>
                <img className="mt-2" src={arrowDown} />
              </div>
            </div>
            <div>
              <Button icon={searchWhite} title={labels.search} />
            </div>
          </div>
        </div>
      </div>
      {jobs.map((job) => (
        <div key={job.id} className="space-y-4 pt-3">
          <div className="flex gap-2">
            <div>
              <span className="text-[18px] font-semibold">{job.title}</span>
            </div>
            <div>
              <span className="text-[14px] font-semibold underline text-primary cursor-pointer">
                {labels.see} {job.title}
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-4">
            {job.jobs.map((jobItem) => (
              <JobCard key={jobItem.id} jobItem={jobItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSection;
