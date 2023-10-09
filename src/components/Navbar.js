import React, { useState  } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Input, Button, Drawer } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className=" md:hidden flex w-1/1 items-center justify-start flex-wrap py-3 navbar">
        <Button
          className="px-2 rounded-sm  mx-2 shadow-md hover:border-0 border-0 transition-none"
          style={{ borderRadius: "10px" }}
          // type="primary"
          onClick={showDrawer}
        >
          <AiOutlineMenu fill="#02C8AC" />
        </Button>
        <Link to="/">
          <h1
            className=" font-bold text-2xl navbar_text"
            style={{ color: "#02C8AC" }}
          >
            Forum(By UB)
          </h1>
        </Link>
        <Input.Search
          placeholder="Type here to search ...(DOES NOT WORK)"
          id="search"
          className="pt-[-8px] ml-[2.5vw] h-fit w-[60vw] text-sm bg-gray-100 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <Drawer
          // title="Basic Drawer"
          placement={"left"}
          onClose={onClose}
          open={open}
          key={"left"}
          closable={false}
        >
          <GrClose
            className="font-bold h-6 w-6 absolute right-6 top-6"
            onClick={onClose}
          />

          <Link to="/Home">
            <h5 className="mt-16 py-4 relative left-[-20px] pl-10 hover:bg-[#02C8AC] hover:text-[#FFFFFF] font-['Poppins'] w-full text-4xl hover:translate-x-5 transition-all text-[#02C8AC]">
              Home
            </h5>
          </Link>
          <Link to="/Dashboard">
            <h5 className=" py-4 relative left-[-20px] pl-10 hover:bg-[#02C8AC] hover:text-[#FFFFFF] font-['Poppins'] w-full text-4xl mt-4 hover:translate-x-5 transition-all text-[#02C8AC]">
              Dashboard
            </h5>
          </Link>
        </Drawer>
      </nav>
      <nav className="max-md:hidden flex w-1/1 items-center justify-around flex-wrap p-3 navbar">
        <Link to="/">
          <h1
            className=" font-bold text-2xl navbar_text"
            style={{ color: "#02C8AC" }}
          >
            Forum(By Uday Bhatia)
          </h1>
        </Link>
        <div className="search flex w-1/2 justify-evenly">
          <Input.Search
            placeholder="Type here to search ...(DOES NOT WORK)"
            id="search"
            className="pt-[-8px] h-fit text-sm bg-gray-100 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <Link to="/Dashboard" className="flex">
          <div
            className="profile w-8 h-8 border overflow-hidden shadow-md"
            style={{ borderRadius: "10px" }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/101352755?v=4"
              alt="developer"
            />
          </div>
          <h3 className="mx-2 mt-1 font-semibold">Uday Bhatia</h3>
        </Link>
      </nav>
    </>
  );
}
