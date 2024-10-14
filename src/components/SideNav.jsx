import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ setAuthState }) => {
  return (
    <div className="flex">

    <div className=" max-w-56 h-screen  border-r  p-10">
      <nav className="flex flex-col text-zinc-400 text-xl gap-2.5">
        <Link onClick={() => setAuthState("dashboard")} className="hover:bg-[#6556CD] hover:text-white duration-300  rounded-lg p-5">
          Dashboard
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300  rounded-lg p-5">
          Profile
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          Settings
        </Link>
      </nav>
    </div>
    </div>


  );
};

export default SideNav;
