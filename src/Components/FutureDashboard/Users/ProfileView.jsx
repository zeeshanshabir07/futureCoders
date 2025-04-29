import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "@/App";

const ProfileView = () => {
  const [profile, setProfile] = useState(null);
  let id = localStorage.getItem("CurrentId");
  console.log(id)

  useEffect(() => {
    if (id) {
      const allProfiles = JSON.parse(localStorage.getItem("Profiles"));;
      console.log(allProfiles)
      const userProfile = allProfiles.find((user) => user.userId === parseInt(id));
      console.log(userProfile)
      setProfile(userProfile || null);
    }
  }, [id]);

  const handleUpdate = () => {
    if (profile) {
      localStorage.setItem("ProfileToUpdate", JSON.stringify(profile)); // Store the selected profile
      window.location.href = "/ProfileBuilder"; // Redirect to profile builder
    }
  };

  const handleDelete = () => {
    const allProfiles = JSON.parse(localStorage.getItem("Profiles")) || [];
    const updatedProfiles = allProfiles.filter((p) => p.userId !== userId);
    localStorage.setItem("Profiles", JSON.stringify(updatedProfiles));
    setProfile(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white px-4">
      <div className="w-full max-w-4xl p-6 md:p-8 bg-gray-800 shadow-lg rounded-lg relative">
        {/* Action Buttons */}
        {profile && (
          <div className="absolute top-4 right-4 space-x-3">
            <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Update
            </button>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>

        {id && profile ? (
          <>
            {/* Profile Image */}
            <div className="flex justify-center">
              <img
                src={profile.profilePicture || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-600"
              />
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-3 bg-gray-700 rounded"> <strong>Full Name:</strong> {profile.fullName}</div>
              <div className="p-3 bg-gray-700 rounded"> <strong>Father's Name:</strong> {profile.fatherName}</div>
              <div className="p-3 bg-gray-700 rounded"> <strong>Address:</strong> {profile.address}</div>
              <div className="p-3 bg-gray-700 rounded"> <strong>Last Degree:</strong> {profile.lastDegree}</div>
              <div className="p-3 bg-gray-700 rounded"> <strong>Total Marks:</strong> {profile.totalMarks}</div>
              <div className="p-3 bg-gray-700 rounded"> <strong>Obtained Marks:</strong> {profile.obtainedMarks}</div>
              <div className="p-3 bg-gray-700 rounded"> <strong>City:</strong> {profile.city}</div>
              <div className="p-3 bg-gray-700 rounded"> <strong>Domicile:</strong> {profile.domicile}</div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-400">No profile found.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileView;
