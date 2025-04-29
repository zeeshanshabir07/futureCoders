import React, { useContext } from "react";
import { UserContext } from '@/App';
const ApplicationStatus = () => {

  const currentUserId = parseInt(localStorage.getItem('CurrentId'), 10);
  const ApplicationStatus = JSON.parse(localStorage.getItem("Applications")) || [];
  const internships = JSON.parse(localStorage.getItem("Internships")) || [];
  
  const userApplications = ApplicationStatus.filter(
    (app) => app.personId === currentUserId
  );
  console.log(userApplications)

  return (
    <div className="flex items-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-4">
      <div className="w-full max-w-5xl p-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Application Status</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3">Title</th>
                <th className="p-3">Company</th>
                <th className="p-3">Location</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
            {userApplications.length > 0 ? (
                userApplications.map((app, index) => {
                  const internship = internships.find(
                    (intern) => intern.internshipId === app.internshipId
                  );
                  return internship ? (
                    <tr key={index} className="border-b border-gray-600">
                      <td className="p-3">{internship.title}</td>
                      <td className="p-3">{internship.company}</td>
                      <td className="p-3">{internship.location}</td>
                      <td className="p-3">{internship.duration}</td>
                      <td className="p-3 font-semibold">
                        <span className="text-yellow-400">{app.status}</span>
                      </td>
                    </tr>
                  ) : null;
                })
              ) : (
                <tr>
                  <td className="p-3 text-center" colSpan="5">
                    No Applications Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ApplicationStatus;
