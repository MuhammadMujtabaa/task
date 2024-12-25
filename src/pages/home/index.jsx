import React from "react";
import Layout from "../../components/layout";
import UserProfile from "./components/userProfile";
import JobSection from "./components/userProfile/jobSection";

const Home = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-7 gap-5">
        <div className="lg:col-span-2">
          <UserProfile />
        </div>
        <div className="lg:col-span-5 col-span-1 w-full">
          <JobSection />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
