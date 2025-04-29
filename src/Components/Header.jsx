import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <nav className="flex h-[60px] px-6 bg-[linear-gradient(135deg,#000_0%,#222_100%)]  justify-between items-center">
        <div className="text-[20px] font-bold bg-gradient-to-r from-[#ff5733] to-[#ffbd33] bg-clip-text text-transparent">
          FutureCoders
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center justify-center list-none gap-5">
            <li>
              <Link
                className="text-white text-base no-underline transition-colors duration-300 ease-in-out hover:text-[#ff5733]"
                to="/"
                onClick={closeMenu}
              >
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base no-underline transition-colors duration-300 ease-in-out hover:text-[#ff5733]"
                to="/about"
                onClick={closeMenu}
              >
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base no-underline transition-colors duration-300 ease-in-out hover:text-[#ff5733]"
                to="/contact"
                onClick={closeMenu}
              >
                <i className="fas fa-home"></i> Contact
              </Link>
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-[#ff5733] to-[#ffbd33] text-white py-1 px-4 rounded-md transition-all duration-300 ease-in-out hover:from-[#e64a2e] hover:to-[#e68a2e] hover:shadow-lg hover:scale-105 flex items-center space-x-2"
                to="/login"
                id="showLogin"
                onClick={closeMenu}
              >
                <i className="fas fa-sign-in-alt"></i>
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-[#ff5733] to-[#ffbd33] text-white py-1 px-4 rounded-md transition-all duration-300 ease-in-out hover:from-[#e64a2e] hover:to-[#e68a2e] hover:shadow-lg hover:scale-105 flex items-center space-x-2"
                to="/register"
                id="showRegister"
                onClick={closeMenu}
              >
                <i className="fas fa-user-plus"></i>
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="block sm:hidden text-white">
          {menu ? (
            <i onClick={toggleMenu} className="fas fa-times"></i>
          ) : (
            <i onClick={toggleMenu} className="fas fa-bars"></i>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="block sm:hidden">
          <ul className="flex flex-col items-center list-none gap-5 bg-black py-4">
            <li className="w-full text-center border-b border-gray-600 py-2">
              <Link
                className="text-white text-base no-underline hover:text-[#ff5733] transition-all"
                to="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="w-full text-center border-b border-gray-600 py-2">
              <Link
                className="text-white text-base no-underline hover:text-[#ff5733] transition-all"
                to="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="w-full text-center border-b border-gray-600 py-2">
              <Link
                className="text-white text-base no-underline hover:text-[#ff5733] transition-all"
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="w-full text-center border-b border-gray-600 py-2">
              <Link
                className="text-white text-base no-underline hover:text-[#ff5733] transition-all"
                to="/login"
                onClick={closeMenu}
              >
                Login
              </Link>
            </li>
            <li className="w-full text-center border-b border-gray-600 py-2">
              <Link
                className="text-white text-base no-underline hover:text-[#ff5733] transition-all"
                to="/register"
                onClick={closeMenu}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
