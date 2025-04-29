import React from 'react';

const Hero = () => {
  return (
    <>
      <main className="bg-[linear-gradient(135deg,#000_0%,#222_100%)] h-[calc(100vh-60px)] flex flex-col justify-between">
        {/* Main Content */}
        <div className="max-w-5xl flex flex-col m-auto py-32 justify-center items-center text-center p-5 text-white">
          <h1 className="md:text-6xl text-4xl font-bold md:mb-6 mb-4 animate-fadeIn">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#ff5733] to-[#ffbd33] bg-clip-text text-transparent">
              FutureCoders
            </span>
          </h1>
          <p className="md:text-2xl text-xl mb-4 md:mb-8 animate-fadeIn delay-200">
            Your gateway to the future of coding and innovation.
          </p>
          <button className="bg-gradient-to-r from-[#ff5733] to-[#ffbd33] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#e64a2e] hover:to-[#e68a2e] transition-all duration-300 animate-fadeIn delay-400">
            Get Started
          </button>
        </div>

        {/* Footer Section */}
        <div className="border-t   flex justify-between px-[20px] items-center border-gray-700 pt-2 pb-3 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FutureCoders. All rights reserved.
          </p>
          <p className="text-gray-400 ">
            Designed with ❤️ by Zeeshan Shabir
          </p>
        </div>
      </main>
      
    </>
  );
};

export default Hero;