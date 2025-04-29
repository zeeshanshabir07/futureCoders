import React, { useContext, useState } from "react";
import { UserContext } from "@/App";

const ProfileBuilder = () => {
  const { profile, updateProfile,  } = useContext(UserContext); // ✅ Get from context
  const [imagePreview, setImagePreview] = useState(null); // For showing preview
  const getValidUserId = () => {
    const currentUserId = localStorage.getItem("CurrentId");
    const user = JSON.parse(localStorage.getItem("userData")) || [];
    const currentUser = user.find((u) => u.id === parseInt(currentUserId));
    return currentUser && currentUser.id === parseInt(currentUserId) ? currentUser.id : null;
  };
  
  let Userid = getValidUserId();
  console.log(Userid)
  

  const handleChange = (e) => {
    updateProfile({ ...profile, [e.target.name]: e.target.value });
  };

  console.log(profile)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile({ ...profile, profilePicture: reader.result }); // Store Base64 image
        setImagePreview(reader.result); // Show preview
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing profiles from localStorage or initialize an empty array
    const existingProfiles = JSON.parse(localStorage.getItem("Profiles")) || [];

    // Add new profile to the array
    const updatedProfiles = [...existingProfiles, { ...profile, userId: Userid}];

    // Save to localStorage
    localStorage.setItem("Profiles", JSON.stringify(updatedProfiles));

    console.log("Profile Submitted:", profile);
     
    // Reset form fields properly
    updateProfile({
      id: null,
      fullName: "",
      fatherName: "",
      address: "",
      lastDegree: "",
      totalMarks: "",
      obtainedMarks: "",
      city: "",
      domicile: "",
      profilePicture: "",
    });

    setImagePreview(null); // Clear image preview
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg border-4 border-blue-500">
      <h2 className="text-3xl font-bold text-center mb-6 border-b-2 pb-2 border-blue-400">Profile Builder</h2>
      
      {/* Image Preview */}
      {imagePreview && (
        <div className="flex justify-center mb-4">
          <img src={imagePreview} alt="Profile Preview" className="w-24 h-24 rounded-full border-2 border-blue-400" />
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Full Name" />
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="fatherName" value={profile.fatherName} onChange={handleChange} placeholder="Father's Name" />
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="lastDegree" value={profile.lastDegree} onChange={handleChange} placeholder="Last Degree" />
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="totalMarks" value={profile.totalMarks} onChange={handleChange} placeholder="Total Marks" />
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="obtainedMarks" value={profile.obtainedMarks} onChange={handleChange} placeholder="Obtained Marks" />
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="city" value={profile.city} onChange={handleChange} placeholder="City" />
        <input className="p-3 bg-gray-700 rounded w-full border border-gray-500" name="domicile" value={profile.domicile} onChange={handleChange} placeholder="Domicile" />

        {/* Picture Upload */}
        <input type="file" accept="image/*" className="p-3 bg-gray-700 rounded w-full border border-gray-500" onChange={handleImageChange} />

        <div className="col-span-2 flex justify-center">
          <button type="submit" className="w-1/2 p-3 bg-blue-500 rounded hover:bg-blue-600 transition duration-300 text-white font-semibold border border-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileBuilder;
