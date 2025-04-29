import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white font-sans">
      {/* Header */}
      <nav className="flex h-[60px] px-6 justify-between items-center border-b border-[#333]">
        <div className="text-[22px] font-extrabold bg-gradient-to-r from-[#ff5733] to-[#ffbd33] bg-clip-text text-transparent">
          FutureCoders
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-6">
            {['/', '/about', '/contact'].map((path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className="hover:text-[#ffbd33] transition-colors"
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={closeMenu}
                className="bg-gradient-to-r from-[#ff5733] to-[#ffbd33] px-4 py-1 rounded-md hover:scale-105 transition-transform"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                onClick={closeMenu}
                className="bg-gradient-to-r from-[#ffbd33] to-[#ff5733] px-4 py-1 rounded-md hover:scale-105 transition-transform"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="block sm:hidden cursor-pointer text-xl" onClick={toggleMenu}>
          <i className={`fas ${menu ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="block sm:hidden bg-[#111] border-t border-[#333]">
          <ul className="flex flex-col items-center gap-4 py-4">
            {['/', '/about', '/contact', '/login', '/register'].map((path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className="text-white hover:text-[#ffbd33] transition-colors"
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#ff5733] to-[#ffbd33] bg-clip-text text-transparent">
            FutureCoders
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Your gateway to the future of coding and innovation.
        </p>
        <button className="bg-gradient-to-r from-[#ff5733] to-[#ffbd33] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#333] py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-6">
        <p>&copy; {new Date().getFullYear()} FutureCoders. All rights reserved.</p>
        <p>Designed with ❤️ by FutureCoders Team</p>
      </footer>
    </div>
  );
};

export default Page;
