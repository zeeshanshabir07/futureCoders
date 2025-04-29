import React, { useState, useEffect } from "react";

const UserDataPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = () => {
      try {
        const currentUserId = parseInt(localStorage.getItem('CurrentId'), 10);
        const allProfiles = JSON.parse(localStorage.getItem("Profiles") || []);
        const allApplications = JSON.parse(localStorage.getItem("Applications") || []);
        const allInternships = JSON.parse(localStorage.getItem("Internships") || []);

        // 1. Get all internships posted by current user
        const myPostedInternships = allInternships.filter(
          internship => internship.personId === 0
        );

        // 2. Get applications for those internships
        const myInternshipApplications = allApplications.filter(app => 
          myPostedInternships.some(internship => internship.internshipId === app.internshipId)
        );
         console.log(myInternshipApplications)
        // 3. Combine with profile and internship data
        const applicationsWithDetails = myInternshipApplications.map(app => {
          const internship = allInternships.find(int => int.internshipId === app.internshipId);
          const profile = allProfiles.find(prof => prof.userId === app.personId);
          console.log(profile)
          
          return {
            applicationId: app.id || `${app.internshipId}-${app.personId}`,
            userId: app.personId,
            internshipId: app.internshipId,
            name: profile ? profile.fullName + " " + profile.fatherName : "Unknown Applicant",
            ProfilePicture: profile ? profile.profilePicture : "https://via.placeholder.com/150",
            education: profile ? profile.lastDegree : "Not specified",
            cgpa: profile ? profile.obtainedMarks : "N/A",
            status: app.status || "Pending",
            internshipTitle: internship ? internship.title : "Internship not found",
            company: internship ? internship.company : "",
            appliedDate: app.date || "Unknown date"
          };
        });
        
        setApplications(applicationsWithDetails);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);
  console.log(applications)
  const handleStatusChange = (applicationId, newStatus) => {
    try {
      const allApplications = JSON.parse(localStorage.getItem("Applications") || []);
      
      const updatedApplications = allApplications.map(app => {
        if ((app.internshipId === applicationId.internshipId && app.personId === applicationId.userId) || 
            app.id === applicationId) {
          return { ...app, status: newStatus };
        }
        return app;
      });

      localStorage.setItem("Applications", JSON.stringify(updatedApplications));
      setApplications(prev => prev.map(app => 
        app.applicationId === applicationId || 
        (app.internshipId === applicationId.internshipId && app.userId === applicationId.userId)
          ? { ...app, status: newStatus }
          : app
      ));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Internship Applications</h2>
      
      <div className="overflow-x-auto">
        {applications.length > 0 ? (
          <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-3 text-left">Applicant</th>
                <th className="p-3 text-left">Picture</th>
                <th className="p-3 text-left">Internship</th>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Education</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, index) => (
                <tr key={index} className="border-t border-gray-700 hover:bg-gray-750">
                  <td className="p-3">
                    <div className="font-medium">{application.name}</div>
                    <div className="text-sm text-gray-400">ID: {application.userId}</div>
                  </td>
                  <td className="p-3">
  <img 
    src={application.ProfilePicture} 
    alt={application.name} 
    className="w-12 h-12 rounded-full object-cover"
  />
</td>

                  <td className="p-3">{application.internshipTitle}</td>
                  <td className="p-3">{application.company}</td>
                  <td className="p-3">
                    <div>{application.education}</div>
                    <div className="text-sm">CGPA: {application.cgpa}</div>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded text-sm ${
                        application.status === "Accepted" ? "bg-green-500" :
                        application.status === "Rejected" ? "bg-red-500" : "bg-yellow-500"
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleStatusChange(
                        { internshipId: application.internshipId, userId: application.userId },
                        "Accepted"
                      )}
                      className={`px-3 py-1 rounded text-sm ${
                        application.status === "Accepted" 
                          ? "bg-gray-600 cursor-not-allowed" 
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                      disabled={application.status === "Accepted"}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusChange(
                        { internshipId: application.internshipId, userId: application.userId },
                        "Rejected"
                      )}
                      className={`px-3 py-1 rounded text-sm ${
                        application.status === "Rejected" 
                          ? "bg-gray-600 cursor-not-allowed" 
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                      disabled={application.status === "Rejected"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">No Applications Found</h3>
            <p className="text-gray-500">
              You haven't received any applications for your posted internships yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDataPage;