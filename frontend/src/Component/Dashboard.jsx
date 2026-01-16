import React from "react";
import { useNavigate } from "react-router-dom";




const Dashboard = () => {
  const navigate = useNavigate(); // <-- Add this line
    
  return (
    <div className="bg-gray-50 min-h-screen px-10 py-8 space-y-10">

      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-semibold mb-1">
          Welcome back 👋
        </h1>
        <p className="text-gray-500">
          Track your internship applications and profile progress
        </p>
      </div>

      {/* Stats Cards */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Applications" value="0" />
        <StatCard title="Saved" value="0" />
        <StatCard title="Interviews" value="0" />
      </div>

      {/* Profile + Recent Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold mb-4">Your Profile</h2>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">Profile Completion</span>
            <span className="text-sm font-medium">0%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
            <div className="bg-green-500 h-2 rounded-full w-0"></div>
          </div>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>🎓 Add education details</li>
            <li>🛠 Add your skills</li>
            <li>📍 Set preferred location</li>
          </ul>
          <button
  className="mt-6 w-full border rounded-lg py-2 font-medium hover:bg-gray-50"
  onClick={() => navigate("/education")} // <-- Add this
>
  Complete Profile →
</button>

        </div>

        {/* Recent Applications */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
          <h2 className="font-semibold mb-4 self-start">
            Recent Applications
          </h2>
          <p className="text-gray-500 mb-4">
            No applications yet. Start exploring internships!
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Browse Internships
          </button>
        </div>
      </div>

      {/* Saved Internships */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🔖</span>
          <h2 className="font-semibold text-lg">Saved Internships</h2>
        </div>

        <p className="text-gray-500 mb-4 text-sm text-center">
          No saved internships yet. Bookmark internships you like!
        </p>

        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-md transition">
            Find Internships
          </button>
        </div>
      </div>

      {/* Get Recommendations */}
      <div className="bg-green-50 p-6 rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 text-xl">
            📈
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Ready for more opportunities?
            </h3>
            <p className="text-gray-500 text-sm">
              Get AI-powered recommendations based on your profile
            </p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
          Get Recommendations →
        </button>
      </div>

    </div>
  );
};

/* Reusable StatCard */
const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
      {value}
    </div>
    <div>
      <h3 className="text-xl font-semibold">{value}</h3>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  </div>
);

export default Dashboard;
























// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen px-10 py-8">

//       {/* Welcome */}
//       <h1 className="text-2xl font-semibold mb-1">
//         Welcome back 👋
//       </h1>
//       <p className="text-gray-500 mb-8">
//         Track your internship applications and profile progress
//       </p>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <StatCard title="Applications" value="0" />
//         <StatCard title="Saved" value="0" />
//         <StatCard title="Interviews" value="0" />
//       </div>

//       {/* Profile + Recent Applications */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Profile */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <h2 className="font-semibold mb-4">Your Profile</h2>
//           <div className="flex justify-between mb-2">
//             <span className="text-sm text-gray-500">Profile Completion</span>
//             <span className="text-sm font-medium">0%</span>
//           </div>
//           <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
//             <div className="bg-green-500 h-2 rounded-full w-0"></div>
//           </div>
//           <ul className="text-sm text-gray-600 space-y-2">
//             <li>🎓 Add education details</li>
//             <li>🛠 Add your skills</li>
//             <li>📍 Set preferred location</li>
//           </ul>
//           <button className="mt-6 w-full border rounded-lg py-2 font-medium hover:bg-gray-50">
//             Complete Profile →
//           </button>
//         </div>

//         {/* Recent Applications */}
//         <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
//           <h2 className="font-semibold mb-4 self-start">
//             Recent Applications
//           </h2>
//           <p className="text-gray-500 mb-4">
//             No applications yet. Start exploring internships!
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//             Browse Internships
//           </button>
//         </div>
//       </div>
//     </div>


//   );
// };

// /* Reusable StatCard */
// const StatCard = ({ title, value }) => (
//   <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
//     <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
//       {value}
//     </div>
//     <div>
//       <h3 className="text-xl font-semibold">{value}</h3>
//       <p className="text-gray-500 text-sm">{title}</p>
//     </div>
//   </div>
// );

// export default Dashboard;
