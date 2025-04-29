import React, { useContext } from "react";
import { FaSearch, FaUsers, FaClipboardList, FaSuitcase, FaBell } from "react-icons/fa";
import { UserContext } from "../../../App";

const NavHome = () => {
  const {userCounter} = useContext(UserContext)
  return (
    <div className="w-full  bg-gray-900 text-white p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome, Zeeshan!</h2>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96 mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 text-gray-900 rounded-md outline-none"
          />
          <FaSearch className="absolute top-2 left-2 text-gray-500" />
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaUsers className="text-3xl text-blue-400 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-gray-400">{userCounter || 0}</p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaClipboardList className="text-3xl text-yellow-400 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Applications</h3>
            <p className="text-gray-400">320</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaSuitcase className="text-3xl text-green-400 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Internships</h3>
            <p className="text-gray-400">58</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaBell className="text-3xl text-red-400 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Notifications</h3>
            <p className="text-gray-400">12 New</p>
          </div>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg h-[40vh] flex items-center justify-center">
        <p className="text-gray-400 text-lg">More content coming soon...</p>
      </div>
    </div>
  );
};

export default NavHome;
