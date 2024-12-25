import React, { useState } from "react";
import logo from "../../../../public/logo.svg";
import searchGray from "../../../assets/images/searchGray.svg";
import { navigation, profile } from "../../../constants";
import { labels } from "../../../locales";
import Button from "../../button";
import NavigationItem from "./navigationItem";
const NavBar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <>
      <header className="lg:px-10 md:px-6 px-4 min-h-[70px] bg-white lg:flex items-center hidden justify-between">
        <div className="lg:flex items-center ">
          <div>
            <img src={logo} />
          </div>
          <div className={`px-10  flex gap-10`}>
            {navigation.map((nav) => (
              <NavigationItem key={nav.id} nav={nav} />
            ))}
          </div>
        </div>
        <div className="lg:flex items-center gap-3">
          <div className="w-[261px] rounded-[8px] bg-[#F6F9FF] h-[39px] p-2 flex gap-2">
            <img src={searchGray} />
            <input
              type="text"
              placeholder="Search"
              className="placeholder:text-[#737A91] font-medium w-full h-min outline-none px-2 bg-transparent"
            />
          </div>
          <Button size="lg" title={labels.resumeBuilder} />
          <div>
            <img
              className="w-[38px] h-[38px] rounded-full"
              src={profile?.avatar}
            />
          </div>
        </div>
      </header>
      {toggleSideBar && (
        <>
          <div className="bg-black/70 w-full fixed h-[100vh] z-10">
            <div className="bg-white w-[90%] h-[100vh] p-4">
              <div className="flex justify-between items-center">
                <div>
                  <img src={logo} />
                </div>
                <div>
                  <button
                    className="font-semibold text-primary text-[20px]"
                    onClick={() => setToggleSideBar(!toggleSideBar)}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="divide-y space-y-3 mt-2">
                {navigation.map((nav) => (
                  <NavigationItem nav={nav} key={nav.id} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="lg:px-10 md:px-6 px-4 min-h-[70px] flex justify-between items-center relative lg:hidden">
        <div>
          <img src={logo} />
        </div>
        <div className="rotate-90">
          <button
            className="font-semibold text-primary text-[20px]"
            onClick={() => setToggleSideBar(!toggleSideBar)}
          >
            |||
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
