import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setAuthState }) => {
  return (
    <header className="py-3 px-[15%] border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-3xl">Destion</h1>
        </Link>
        <div className="flex items-center text-zinc-400 gap-10">
          <p className="hover:text-violet-500">User name</p>
          
          {/* Log In Button - Switch to "login" form */}
          <button
            onClick={() => setAuthState("login")}
            className="hover:bg-[#6556CD] hover:text-white duration-300 px-4 py-3 rounded-lg"
          >
            Log In
          </button>

          {/* Sign Up Button - Switch to "register" form */}
          <button
            onClick={() => setAuthState("register")}
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
