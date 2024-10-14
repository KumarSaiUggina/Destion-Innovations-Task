import React, { useState } from "react";
import SideNav from "./SideNav";
import Form from "./Form";
import Dashboard from "./Dashboard";
import Header from "./Header";

const Home = () => {
    const [authState, setAuthState] = useState("dashboard"); // "login" or "register"

  return (
    <div>
      <Header setAuthState={setAuthState} />
      {/* Pass setAuthState to Header */}

      <div className="flex">
      {/* Fixed SideNav on the left */}
      <div className="w-1/4 fixed left-0  h-full">
        <SideNav setAuthState={setAuthState} />
      </div>

      {/* Centering the Form in the remaining space */}
      <div className="w-full flex justify-center ml-1/4">
        <div className="max-w-screen-md">
        {authState === "dashboard" ? (
              <Dashboard />
            ) : (
              <Form authState={authState} setAuthState={setAuthState} />
            )}
        </div>
      </div>
    </div>

    </div>
  );
};

export default Home;
