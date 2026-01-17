import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

export default function Placements() {
  const navigate = useNavigate();

  const placements = [
    {
      title: "Off-Campus Placements",
      desc: "Explore off-campus job opportunities and hiring platforms.",
      icon: <Briefcase size={30} />,
      path: "/placements/off-campus",
    },
    {
      title: "Internship to Placement",
      desc: "Convert your internship into a full-time placement.",
      icon: <GraduationCap size={30} />,
      path: "/placements/internship",
    },
    {
      title: "Startup & Remote Jobs",
      desc: "Find startup and remote placement opportunities.",
      icon: <Rocket size={30} />,
      path: "/placements/startup",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-10 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-[#0F2A44]">
          Placement Opportunities
        </h1>
        <p className="text-gray-600 mt-3">
          Explore different placement paths supported by InternX
        </p>
      </div>

      {/* Placement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {placements.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-[#FFF3E0] text-[#FFA31A] flex items-center justify-center mb-6">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Briefcase, Building2, GraduationCap, Rocket } from "lucide-react";

// export default function Placements() {
//   const navigate = useNavigate();

//   const placements = [
//     {
//       title: "Campus Placements",
//       desc: "Get guidance and preparation for on-campus recruitment drives.",
//       icon: <Building2 size={32} />,
//       path: "/placements/campus",
//     },
//     {
//       title: "Off-Campus Placements",
//       desc: "Explore off-campus job opportunities and hiring platforms.",
//       icon: <Briefcase size={32} />,
//       path: "/placements/off-campus",
//     },
//     {
//       title: "Internship to Placement",
//       desc: "Convert your internship into a full-time placement.",
//       icon: <GraduationCap size={32} />,
//       path: "/placements/internship",
//     },
//     {
//       title: "Startup & Remote Jobs",
//       desc: "Find startup and remote placement opportunities.",
//       icon: <Rocket size={32} />,
//       path: "/placements/startup",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] px-10 py-16">
//       {/* Heading */}
//       <div className="text-center mb-14">
//         <h1 className="text-4xl font-bold text-[#0F2A44]">
//           Placement Opportunities
//         </h1>
//         <p className="text-gray-600 mt-3">
//           Explore different placement paths supported by InternX
//         </p>
//       </div>

//       {/* Placement Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {placements.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(item.path)}
//             className="bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//           >
//             <div className="w-14 h-14 rounded-xl bg-[#FFF3E0] text-[#FFA31A] flex items-center justify-center mb-6">
//               {item.icon}
//             </div>

//             <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
//               {item.title}
//             </h3>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Briefcase, Building2, GraduationCap, Rocket } from "lucide-react";

// const placements = [
//   {
//     title: "Campus Placements",
//     desc: "Get guidance and preparation for on-campus recruitment drives.",
//     icon: <Building2 size={32} />,
//   },
//   {
//     title: "Off-Campus Placements",
//     desc: "Explore off-campus job opportunities and hiring platforms.",
//     icon: <Briefcase size={32} />,
//   },
//   {
//     title: "Internship to Placement",
//     desc: "Convert your internship into a full-time placement.",
//     icon: <GraduationCap size={32} />,
//   },
//   {
//     title: "Startup & Remote Jobs",
//     desc: "Find startup and remote placement opportunities.",
//     icon: <Rocket size={32} />,
//   },
// ];

// export default function Placements() {
//   return (
//     <div className="min-h-screen bg-[#F8FAFC] px-10 py-16">
//       {/* Heading */}
//       <div className="text-center mb-14">
//         <h1 className="text-4xl font-bold text-[#0F2A44]">
//           Placement Opportunities
//         </h1>
//         <p className="text-gray-600 mt-3">
//           Explore different placement paths supported by InternX
//         </p>
//       </div>

//       {/* Placement Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {placements.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//           >
//             <div className="w-14 h-14 rounded-xl bg-[#FFF3E0] text-[#FFA31A] flex items-center justify-center mb-6">
//               {item.icon}
//             </div>

//             <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
//               {item.title}
//             </h3>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
