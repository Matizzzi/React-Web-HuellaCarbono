// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiHome3Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#1f1d2b] fixed left-0 top-0 w-28 h-full ">
      <ul className=" pl-4 ">
        <li>
          <h1 className="text-2xl text-gray-300 uppercase font-bold text-center ">
            Logo
          </h1>
        </li>
        <li className="bg-[#262837] p-4  rounded-tl-xl rounded-bl-xl">
          <a
            href="#"
            className="bg-[#ec7c6a] flexs justify-center p-4 block rounded-xl  text-white"
          >
            <RiHome3Fill className="text-xl " />
          </a>
        </li>
        <li className=  " hover:bg-[#262837] p-4  rounded-tl-xl rounded-bl-xl">
          <a
            href="#" className=" flexs justify-center p-4 block rounded-xl  text-[#ec7c6a]"
          >
            <FaSearch className="text-xl " />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
