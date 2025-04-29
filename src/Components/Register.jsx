import React, { useContext, useState } from 'react';
import { UserContext } from '../App';

const Register = () => {
  const { addUser, updaterUserCounter,userCounter, } = useContext(UserContext);
    // const randomId = Math.floor(10000 + Math.random() * 90000);
 // Generate a random ID for the new user
  const [userform, setUserForm] = useState({
    id: null,
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
    role: "user"
  });

  const [error, setError] = useState("");
  let counter = 0;
  const handleChange = (e) => {
    setUserForm({ ...userform, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userform.password !== userform.verifyPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    const newUser = {
      id: userCounter,
      username: userform.username,
      email: userform.email,
      password: userform.password,
      role: userform.role
    };
    addUser(newUser); // Save to context & localStorage
  
    // Correctly parse and update userCounter
    let counter = parseInt(localStorage.getItem('userCounter')) || 0;
    counter++;
    localStorage.setItem('userCounter', counter);  // Save updated counter
    updaterUserCounter(counter);  // Update the state
  
    setUserForm({ username: "", email: "", password: "", verifyPassword: "", role: "user" });
  };
  
  return (
    <div className="h-[calc(100vh-60px)] flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>

        {error && <p className="text-center text-red-600 text-sm mb-4">{error}</p>}

        <input
          type="text"
          name="username"
          value={userform.username}
          onChange={handleChange}
          placeholder="Write username."
          required
          className="w-full py-1 px-2 text-[15px] mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          value={userform.email}
          onChange={handleChange}
          placeholder="Write Email..."
          required
          className="w-full py-1 px-2 text-[15px] mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          value={userform.password}
          onChange={handleChange}
          placeholder="Password..."
          required
          className="w-full py-1 px-2 text-[15px] mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="verifyPassword"
          value={userform.verifyPassword}
          onChange={handleChange}
          placeholder="Verify Password..."
          required
          className="w-full py-1 px-2 text-[15px] mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="role"
          value={userform.role}
          onChange={handleChange}
          required
          className="w-full py-1 px-2 text-[15px] mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full py-1 px-4 bg-gradient-to-r from-[#ff5733] to-[#ffbd33] text-white font-semibold rounded-md transition-all duration-300 ease-in-out hover:from-[#e64a2e] hover:to-[#e68a2e] hover:shadow-lg hover:scale-105"
        >
          Register
        </button>

        <p className="text-center mt-4 text-gray-700">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
