import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Profile = () => {
  const [editAbout, setEditAbout] = useState(false);
  const [aboutText, setAboutText] = useState("I am a student at NSUT");
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] overflow-hidden font-['poppins'] w-fit">
      <div className="px-[110px] lg:px-[40px] pt-[35px] pb-[25px] overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/101352755?v=4"
                alt="profile"
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="flex flex-col ml-[30px] px-2 items-center">
              <text className=" flex text-[40px] font-bold ">Uday Bhatia</text>
              <div className="flex flex-row justify-between">
                <text className=" flex text-[20px] font-medium mx-[10px]">
                  {" "}
                  420 Followers
                </text>
                <text className=" flex text-[20px] font-medium mx-[10px]">
                  {" "}
                  69 Following
                </text>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-fit mt-[15px]">
            <div className="flex flex-row relative items-center mt-[5px] mb-[40px] w-[355px]">
              <text className="text-[20px] font-[500] absolute top-0">
                About :
              </text>
              {editAbout ? (
                <>
                  <input
                    className="p-2 text-[18px] font-[500] ml-[105px] w-[70%] h-fit overflow-hidden"
                    defaultValue={aboutText}
                    placeholder={"tell something about yourself."}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setAboutText(e.target.value);
                        setEditAbout(false);
                      }
                    }}
                  />
                  <GrClose
                    color="black"
                    fontSize="26px"
                    className="absolute top-0 sm:right-[-35%] xl:right-[-25%] right-[-45%] overflow-hidden"
                    onClick={(e) => {
                      setEditAbout(!editAbout);
                    }}
                  />
                </>
              ) : (
                <>
                  <text className="text-[18px] font-[500] ml-[105px] w-[70%] h-fit">
                    {aboutText}
                  </text>
                  <AiFillEdit
                    color="black"
                    fontSize="36px"
                    className="absolute top-0 sm:right-[-35%] xl:right-[-25%] right-[-45%]"
                    onClick={(e) => {
                      setEditAbout(!editAbout);
                    }}
                  />
                </>
              )}
            </div>
            <div className="flex flex-row  items-center my-[5px] ">
              <text className="text-[20px] font-[500]">Email :</text>
              <text className="text-[18px] font-[500] ml-[110px]">
                uday@udayb.com
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
