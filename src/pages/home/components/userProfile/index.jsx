import React from "react";
import Profile from "./profile";
import Stats from "./userStats";
import UpComingInterViews from "./upComingInterViews";

const UserProfile = () => {
  return (
    <div className="space-y-5">
      <Profile />
      <Stats />
      <UpComingInterViews />
    </div>
  );
};

export default UserProfile;
