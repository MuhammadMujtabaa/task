import { v4 as uuidv4 } from "uuid";
import { labels } from "../../../../../locales";

const stats = [
  { id: uuidv4(), title: labels.profileVisitors, key: "profile_visitors" },
  { id: uuidv4(), title: labels.resumeViewers, key: "resume_viewers" },
  { id: uuidv4(), title: labels.myJobs, key: "my_jobs" },
];
import StatItem from "./statItem";

const Stats = () => {
  return (
    <div className="bg-white rounded-[10px] p-5 divide-y">
      {stats?.map((item) => (
        <StatItem key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default Stats;
