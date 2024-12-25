import React from "react";
import { profile } from "../../../../../constants";

const Profile = () => {
  return (
    <div className="bg-white rounded-[10px] overflow-hidden">
      <div
        className="relative h-[100px] w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${profile.cover}')`,
        }}
      >
        <div className="absolute w-full -bottom-10">
          <img
            className="rounded-full w-[86px] h-[86px] border-2 border-white mx-auto"
            src={profile.avatar}
          />
        </div>
      </div>
      <div className="pt-12 pb-5 md:px-24 text-center">
        <div>
          <span className="font-semibold text-[18px] text-dark">
            {profile.firstName} {profile.lastName}
          </span>
        </div>
        <div>
          <span className="text-[14px] text-dark">{profile.headline}</span>
        </div>
        <div>
          <span className="text-[12px] text-text">{profile.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
