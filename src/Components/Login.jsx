import React, { useState, useContext } from "react";
import { UserContext } from "../App";

const Login = () => {
  const { setLoggedInUser,userId, setUserId } = useContext(UserContext); // ✅ Get from context
  
  const [loginUser, updateLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    updateLoginData({ ...loginUser, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
  
    let users = JSON.parse(localStorage.getItem("userData")) || [];
    const user = users.find((u) => u.email === loginUser.email && u.password === loginUser.password);
  
    if (user) {
      alert("Login successful!");
     localStorage.setItem('CurrentId', user.id.toString()); 

      setLoggedInUser(user.role); 
      console.log(user)
      setUserId( user.id.toString());                // ✅ Important: Set the user ID in Context
      localStorage.setItem("loggedInUser", JSON.stringify(user)); 
    } else {
      setError("Invalid email or password!");
    }
  };
  
  return (
    <div className="h-[calc(100vh-60px)] flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black">
      <form onSubmit={loginSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

        {error && <p className="text-center text-red-600 text-sm mb-4">{error}</p>}

        <input
          type="email"
          name="email"
          value={loginUser.email}
          onChange={handleLogin}
          placeholder="Email"
          required
          className="w-full py-1 px-2 text-[15px] mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          value={loginUser.password}
          onChange={handleLogin}
          placeholder="Password"
          required
          className="w-full py-1 px-2 text-[15px] mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-1 px-4 bg-gradient-to-r from-[#ff5733] to-[#ffbd33] text-white font-semibold rounded-md transition-all duration-300 ease-in-out hover:from-[#e64a2e] hover:to-[#e68a2e] hover:shadow-lg hover:scale-105"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-700">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
