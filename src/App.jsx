import React, { createContext, useState, useEffect } from "react";
import HomePage from './Pages/HomePage';
import MainBoard from './Pages/MainBoard';
import NavHome from "./Components/FutureDashboard/Users/NavHome";
import ProfileView from "./Components/FutureDashboard/Users/ProfileView";
import ApplicationStatus from "./Components/FutureDashboard/Users/ApplicationStatus"
export const UserContext = createContext();

const App = () => {
//   const [userId, setUserId] = useState(null);
//  console.log(userId)
  //Aside.jsx file link state
  const [page, setPage] = useState("home");

  // Load userData from localStorage
  const [userData, setUserData] = useState(() => {
    const savedUsers = localStorage.getItem("userData");
    return savedUsers ? JSON.parse(savedUsers) : []; // Prevent JSON parse error
  });
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);


  //Load User ProfileBulder Page data from local storage
  const [profile, updateProfile] = useState(() => {
    // Retrieve data from localStorage on initial render
    const savedProfile = localStorage.getItem("ProfileToUpdate");
    return savedProfile ? JSON.parse(savedProfile) : {
      fullName: "",
      fatherName: "",
      address: "",
      lastDegree: "",
      totalMarks: "",
      obtainedMarks: "",
      city: "",
      domicile: "",
      profilePicture: null,
    };
  
  });


  // Load userCounter to store it when user register their account
  const [userCounter, updaterUserCounter] = useState(() => {
    const savedCounter = localStorage.getItem("userCounter");
    return savedCounter ? parseInt(savedCounter) : 0;  // Parse the counter or set to 0 if not found
  });

  // Effect to save userCounter to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("userCounter", userCounter);  
  }, [userCounter]);  

 
  // Load loggedInUser safely from localStorage
  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || null; // Load username if exists
  });

  useEffect(() => {
    if (loggedInUser !== null) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    }
  }, [loggedInUser]);

  // Function to add a new user
  const addUser = (newUser) => {
    setUserData((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      localStorage.setItem("userData", JSON.stringify(updatedUsers)); // Save immediately
      return updatedUsers;
    });
  };

  return (
    <>
  
      <UserContext.Provider value={{ userData, setUserData, addUser, loggedInUser,userCounter, setLoggedInUser, updaterUserCounter ,page,setPage, profile , updateProfile, }}>
      {loggedInUser ? <MainBoard /> : <HomePage />}
    </UserContext.Provider>
    
    </>
   
  );
};

export default App;
