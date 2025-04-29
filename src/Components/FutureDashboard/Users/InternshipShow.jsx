import React, { useState, useEffect } from "react";

const InternshipShow = () => {
  const currentUserId = parseInt(localStorage.getItem('CurrentId'), 10);
  const [internships, setInternships] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedInternships = JSON.parse(localStorage.getItem("Internships")) || [];
    const storedApplications = JSON.parse(localStorage.getItem("Applications")) || [];
    setInternships(storedInternships);
    setApplications(storedApplications);
  }, []);

  const handleApply = (internshipId) => {
    const alreadyApplied = applications.some(
      (app) => app.personId === currentUserId && app.internshipId === internshipId
    );

    if (alreadyApplied) {
      alert("You have already applied for this internship.");
      console.log(alreadyApplied)
      return;
    }

    const newApplication = {
      personId: currentUserId,
      internshipId: internshipId,
    };

    const updatedApplications = [...applications, newApplication];
    localStorage.setItem("Applications", JSON.stringify(updatedApplications));
    setApplications(updatedApplications); // update state to immediately reflect button change
    alert("Application successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="w-full max-w-5xl p-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Available Internships</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {internships.length > 0 ? (
            internships.map((internship) => {
              const alreadyApplied = applications.some(
                (app) => app.personId === currentUserId && app.internshipId === internship.internshipId
              );

              return (
                <div key={internship.internshipId} className="bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
                  <h3 className="text-xl font-semibold">{internship.title}</h3>
                  <p className="text-gray-300">{internship.company}</p>
                  <p className="text-gray-400">{internship.location}</p>
                  <p className="text-gray-400">{internship.duration}</p>

                  {alreadyApplied ? (
                    <button disabled className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg w-full cursor-not-allowed">
                      Applied
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleApply(internship.internshipId)} 
                      className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-400">No internships available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipShow;
