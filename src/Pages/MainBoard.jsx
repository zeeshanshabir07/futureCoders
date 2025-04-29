import {useState, useContext } from 'react';
import Aside from '@/Components/FutureDashboard/Aside';
import shani from '../assets/shani.jpg';
import { UserContext } from '../App';
import NavHome from '../Components/FutureDashboard/Users/NavHome';
import ProfileView from '../Components/FutureDashboard/Users/ProfileView';
import ApplicationStatus from '../Components/FutureDashboard/Users/ApplicationStatus';
import AddInternship from '../Components/FutureDashboard/Admin/AddInternship';
import UserDataPage from '../Components/FutureDashboard/Admin/UserDataPage'
import ProfileBuilder from '../Components/FutureDashboard/Users/ProfileBuilder'
// import NavHome from '../Components/FutureDashboard/Users/NavHome';
// import ProfileView from '../Components/FutureDashboard/Users/ProfileView';
// import ApplicationStatus from '../Components/FutureDashboard/Users/ApplicationStatus';
import InternshipShow from '../Components/FutureDashboard/Users/InternshipShow';
// import AddInternship from "../Components/FutureDashboard/Users/AddInternship";
// import UserDataPage from "../Components/FutureDashboard/Users/UserDataPage";

import { Bell } from 'lucide-react';

const MainBoard = () => {
  const { loggedInUser, page } = useContext(UserContext);
  const notificationCount = 2; // Example notification count
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  console.log(isNotificationOpen)
  function notify(){

    setNotificationOpen(!isNotificationOpen);

  }
  
  
   
  return (
    <>
      <div className="min-h-screen bg-emerald-800">
        {/* 🔹 Header with Glassmorphism Effect */}
        <div className="fixed top-0 left-0 right-0 h-16 py-3 px-8 bg-[#121212]/80 backdrop-blur-md z-50 flex justify-between items-center shadow-lg">
          {/* Logo with Gradient Effect */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff5733] to-[#ffbd33] bg-clip-text text-transparent">
            FutureCoders
          </h2>

          {/* 🔔 Notifications & Profile */}
          <div className="flex items-center gap-5">
  {/* Notification Bell with Dropdown */}
  <div className="relative">
    <div onClick={notify}  className="relative cursor-pointer p-2 hover:bg-gray-700/30 rounded-full transition">
      <Bell   className="text-white w-6 h-6" />
      {notificationCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {notificationCount}
        </span>
      )}
    </div>
    
    {/* Dropdown Notification Menu */}
    {isNotificationOpen && (
      <div className="absolute right-0 mt-2 w-72 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50">
        <div className="p-3 border-b border-gray-700">
          <h3 className="font-semibold text-white">Notifications</h3>
        </div>
        <div className="max-h-60 overflow-y-auto">
          {/* Sample notification items */}
          <div className="p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700">
            <p className="text-sm text-white">New internship: Frontend Developer at TechCorp</p>
            <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
          </div>
          <div className="p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700">
            <p className="text-sm text-white">New internship: Backend Engineer at DataSystems</p>
            <p className="text-xs text-gray-400 mt-1">15 minutes ago</p>
          </div>
          {/* Add more notifications as needed */}
        </div>
        <div className="p-2 text-center bg-gray-900 rounded-b-lg">
        
        </div>
      </div>
    )}
  </div>

  {/* User Profile Picture & Name */}
  <div className="flex items-center gap-2">
    <img 
      width={40} 
      height={40} 
      className="rounded-full border-2 border-[#ff5733]" 
      src={shani} 
      alt="user" 
    />
    <span className="text-white text-sm">
      {loggedInUser?.username || loggedInUser || 'Guest'}
    </span>
    {/* Optional: Add role badge */}
    {loggedInUser?.role && (
      <span className={`text-xs px-2 py-1 rounded-full ${
        loggedInUser.role === 'admin' ? 'bg-purple-600' : 'bg-blue-600'
      }`}>
        {loggedInUser.role}
      </span>
    )}
  </div>
</div>
        </div>

        {/* Sidebar & Content Section */}
        <div className=" flex">
          <Aside />
          <div className="right-section flex-1 min-h-screen bg-gray-800 p-4 md:ml-64 pt-20 transition-all duration-300">
            
          {loggedInUser === "admin" ? (
  <>
  {page === 'home' && <NavHome />}
            {page === 'ProfileBuilder' && <ProfileBuilder />}
            {page === 'ProfileView' && <ProfileView />}
            {page === 'ApplicationStatus' && <ApplicationStatus />}
            {page === 'InternshipShow' && <InternshipShow />}
            {page === 'AddInternship' && <AddInternship />}
            {page === 'UserDataPage' && <UserDataPage />}
  </>
): (<>
            {page === 'home' && <NavHome />}
            {page === 'ProfileBuilder' && <ProfileBuilder />}
            {page === 'ProfileView' && <ProfileView />}
            {page === 'ApplicationStatus' && <ApplicationStatus />}
            {page === 'InternshipShow' && <InternshipShow />}</>)}

          </div>
        </div>
      </div>
    </>
  );
};

export default MainBoard;
