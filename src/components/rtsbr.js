import React from "react";
import RightSideBarContainer1 from "./rsb/RsbC1";
import RightSideBarContainer2 from "./rsb/RsbC2";


const RightSideBar = () => {
  return (
    <div className="max-md:hidden max-xl:right-0 max-xl:w-[30vw] r w-[25vw] h-[calc(80vh+120px)] absolute right-[8vw] p-[15px]  no-scrollbar overflow-y-scroll">
      <RightSideBarContainer1 title={"Popular"} />
      <RightSideBarContainer2 title={"Subscribed"} />
    </div>
  );
};

export default RightSideBar;
