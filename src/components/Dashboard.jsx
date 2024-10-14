import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold mt-2 mb-6">Welcome to the Dashboard</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Dummy Cards */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Card</h3>
          <p className="mt-2 text-gray-600">This is a dummy card description.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
