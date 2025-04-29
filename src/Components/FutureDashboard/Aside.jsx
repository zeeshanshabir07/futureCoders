import React, { useState, useContext } from "react";
import { 
  FaHome, FaUserAlt, FaSuitcase, 
  FaClipboardList, FaBell, FaBars, 
  FaTimes 
} from "react-icons/fa";
import { UserContext } from "../../App";

const Aside = () => {
  const { setLoggedInUser,loggedInUser, setPage, updateProfile } = useContext(UserContext); 
  const [isOpen, setIsOpen] = useState(false);
console.log(loggedInUser)
  // Sign-out function
  const signOut = () => {
    setLoggedInUser(null);
  localStorage.removeItem("loggedInUser");
  // localStorage.removeItem("ProfileToUpdate"); // Remove temporary cache
    updateProfile(null);
    alert("Signed out successfully!");
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50  text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all"
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-xl p-5 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 rounded-r-2xl`}
      >
        {/* Logo */}
        <div className="text-center text-xl font-bold text-gray-300 mb-6">
          <span className="text-green-400">Future</span>Coders
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4 pt-4">
          
          {/* Admin Links */}
          {loggedInUser === 'admin' ? (
  <>
    <NavItem icon={<FaHome />} text="Home" onClick={() => setPage("home")} />
    <NavItem icon={<FaUserAlt />} text="Profile Builder" onClick={() => setPage("ProfileBuilder")} />
    <NavItem icon={<FaClipboardList />} text="Profile View" onClick={() => setPage("ProfileView")} />
    <NavItem icon={<FaBell />} text="Available Internship" onClick={() => setPage("InternshipShow")} />
    <NavItem icon={<FaSuitcase />} text="Applications Status" onClick={() => setPage("ApplicationStatus")} />
    <NavItem icon={<FaSuitcase />} text="Add Internships" onClick={() => setPage("AddInternship")} />
    <NavItem icon={<FaClipboardList />} text="User Data" onClick={() => setPage("UserDataPage")} />
  </>
) : (
  <>
    <NavItem icon={<FaHome />} text="Home" onClick={() => setPage("home")} />
    <NavItem icon={<FaUserAlt />} text="Profile Builder" onClick={() => setPage("ProfileBuilder")} />
    <NavItem icon={<FaClipboardList />} text="Profile View" onClick={() => setPage("ProfileView")} />
    <NavItem icon={<FaBell />} text="Available Internship" onClick={() => setPage("InternshipShow")} />
    <NavItem icon={<FaSuitcase />} text="Applications Status" onClick={() => setPage("ApplicationStatus")} />
  </>
)}

          
          
        </ul>

        {/* Sign Out Button */}
        <div className="mt-8">
          <button
            onClick={signOut}
            className="w-full py-3 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-all shadow-md"
          >
            Sign Out
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-xs text-center text-gray-500">
          <p>© FutureCoders 2025</p>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ icon, text, onClick }) => (
  <li
    onClick={onClick}
    className="flex items-center space-x-3 py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-800 transition-all group"
  >
    <span className="text-green-400 text-lg group-hover:scale-110 transition-all">{icon}</span>
    <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-all">
      {text}
    </span>
  </li>
);

export default Aside;
