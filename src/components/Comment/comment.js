import React, { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { MdModeComment } from "react-icons/md";


const Comment = () => {

    return (
        <div className="max-w-xl h-fit rounded-[15px] font-['Poppins'] overflow-hidden shadow-[0px_4px_5px_rgba(0,0,0,0.25)] mx-[36px] my-[16px]">
            <div className="px-5 py-4 " >
                <div className="font-[600] text-[#777777] text-xl mx-[22px] mt-[5px] ">How to fix "err_ossl_evp_unsupported" in </div>
                <div className=" justify-start items-center py-1 ">
                    <button className="inline-block bg-[#F6F6F6] h-[20px] w-[60px] rounded-[5px] px-3 py-[0.5px] text-[9px] font-semibold text-[#C7D1E3] ml-[22px] text-center ">
                        Node.js
                    </button>
                    <div className="h-fit text-base text-[#777777] text-[12px] px-3 py-[8px] ml-[12px]">
                        edit the start script from "react-scripts start" to "react-scripts --openssl-legacy-provider start" in package.json
                    </div>

                </div>


                <div className=" flex flex-1 items-end justify-between ml-[12px] px-3">
                    <div className="flex flex-row justify-between ">
                        <img
                            src="https://avatars.githubusercontent.com/u/101352755?v=4"
                            alt="profile"
                            className="w-[50px] h-[50px]"
                        />
                        <div className="flex flex-col justify-end mx-[5px] py-[1.8px] ">
                            <div className="font-[600] text-[#777777] text-[12px] my-[1px] ">Uday Bhatia </div>
                            <div className="font-[500] text-[#777777] text-[10px] my-[1px] ">in the Web Dev community </div>
                        </div>
                    </div>
                    <div className="inline-block justify-end flex-row flex">
                            <div className=" flex  justify-center flex-row mx-[6px]  ">
                               <BiUpvote color="#02C8AC" fontSize="18px" className="mx-[2px]"/>  
                               <text className="text-[15px] mx-[3px]" >12</text>
                            </div>                                                      
                            <div className=" flex  justify-center flex-row mx-[6px]  ">
                               <BiDownvote color="#02C8AC" fontSize="18px" className="mx-[2px]"/>  
                               <text className="text-[15px] mx-[3px]" >12</text>
                            </div>                                            
                            <div className=" flex  justify-center flex-row ml-[6px]  ">
                               <MdModeComment color="#02C8AC" fontSize="18px" className="mx-[2px]"/>  
                               <text className="text-[15px] mx-[3px]" >12</text>
                            </div>                       
                    </div>

                </div>






            </div>

        </div>

    );
};

export default Comment;
