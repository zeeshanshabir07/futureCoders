import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-black  bg-gradient-to-r from-black via-gray-900 to-black  py-10 px-20 flex justify-center items-center h-[calc(100vh-60px)]">
      <div className="max-w-lg w-full">
        <h2 className="text-yellow-400 text-4xl text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full py-1 px-2 rounded-md border-none bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full py-1 px-2 rounded-md border-none bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full py-1 px-2 rounded-md border-none bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-[#ff5733] to-[#ffbd33] text-white font-semibold rounded-md transition-all duration-300 hover:from-[#e64a2e] hover:to-[#e68a2e] hover:shadow-lg hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
