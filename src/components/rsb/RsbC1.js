import React from "react";
import ContainerElement1 from "./E1";
import ContainerElement2 from "./E2";
import ContainerElement3 from "./E3";
// import ContainerElement4 from "./ContainerElement4";
const RightSideBarContainer = ({ title }) => {
  return (
    <div className=" h-fit w-full rounded-2xl pt-6 shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
      <div className="text-center text-2xl text-[#777777] font-semibold  font-sans py-2">
        {title}
      </div>
      <ContainerElement1 />
      <ContainerElement2 />
      <ContainerElement3 />
    </div>
  );
};

export default RightSideBarContainer;
