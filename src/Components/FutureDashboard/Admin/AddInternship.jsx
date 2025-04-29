import React, { useState } from "react";

const AddInternship = () => {
  const currentUserId = parseInt(localStorage.getItem('CurrentId'), 10);

  const generateInternshipId = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const [newInternship, setNewInternship] = useState({
    title: "",
    company: "",
    location: "",
    duration: ""
  });

  const handleChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };

  const handleAddInternship = () => {
    if (!newInternship.title || !newInternship.company || !newInternship.location || !newInternship.duration) {
      alert("Please fill all fields");
      return;
    }

    const internshipEntry = {
      ...newInternship,
      personId: currentUserId,
      internshipId: generateInternshipId()
    };

    const existingInternships = JSON.parse(localStorage.getItem("Internships")) || [];
    const updatedInternships = [...existingInternships, internshipEntry];

    localStorage.setItem("Internships", JSON.stringify(updatedInternships));

    // Clear the form
    setNewInternship({
      title: "",
      company: "",
      location: "",
      duration: ""
    });

    alert("Internship added successfully...");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Internship Management</h2>

      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Add New Internship</h3>

        <input
          type="text"
          name="title"
          placeholder="Internship Title"
          value={newInternship.title}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={newInternship.company}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newInternship.location}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={newInternship.duration}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 rounded"
        />
        <button
          onClick={handleAddInternship}
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg"
        >
          Add Internship
        </button>
      </div>
    </div>
  );
};

export default AddInternship;
