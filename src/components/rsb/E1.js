import React from "react";

const ContainerElement = () => {
  return (
    <div className="relative h-[60px]  p-2 pr-0 my-4">
      <div className=" ml-4 inline-block h-full w-[44px]  mr-2 rounded-lg">
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSet60VZfQTD6zyDxmk9ZAgtmM6QFT3KJ01EQ&usqp=CAU"
        className="rounded-[5px]"
        />
      </div>
      <div className="inline-block h-full align-top ml-4">
        <div className="h-[50%] text-md font-normal font-sans">Web Dev</div>
        <div className="h-[50%] text-sm font-normal font-sans text-[#777777]">
          400k members
        </div>
      </div>
      <div className="cursor-pointer text-[#02C8AC] hover:drop-shadow-[0_0_10px_#05CFB3]  inline-block h-[calc(100%-16px)] w-[48px] absolute pt-2 right-2  text-center  ">
        View
      </div>
    </div>
  );
};

export default ContainerElement;
