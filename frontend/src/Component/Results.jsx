import React, { useEffect, useState } from "react";
import SkillGap from "./SkillGap";


import ResumeScore from "./ResumeScore";



const Results = () => {
  const [internship, setInternship] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        skills: ["React", "JavaScript"],
        interests: ["IT & Technology"],
        location: "Bengaluru"
      })
    })
      .then(res => res.json())
      .then(data => setInternship(data));
  }, []);

  if (!internship) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center pt-20">
      <p className="text-sm text-green-600 mb-2">✨ AI-Powered Results</p>

      <h1 className="text-3xl font-bold mb-2">
        Recommended Internships for You
      </h1>

      <p className="text-gray-500 mb-10">
        Based on your profile, we found these opportunities
      </p>

      {/* Skill Gap Analyzer */}
<div className="w-[380px] mb-8">
  <SkillGap userSkills={["React", "JavaScript"]} />
</div>

{/* Resume Score */}
<div className="w-[380px] mb-10">
  <ResumeScore />
</div>



      {/* CARD */}
      <div className="bg-white w-[380px] p-6 rounded-xl shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {internship.title}
          </h2>
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
            {internship.match} Match
          </span>
        </div>

        <p className="text-gray-500 mt-1">{internship.company}</p>

        <p className="text-gray-600 mt-3 text-sm">
          {internship.description}
        </p>

        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p>📍 {internship.location}</p>
          <p>⏳ {internship.duration}</p>
          <p>💰 {internship.stipend}</p>
        </div>

        <button
          onClick={() => window.open(internship.applyLink, "_blank")}
          className="mt-6 w-full bg-blue-900 text-white py-3 rounded-lg font-medium"
        >
          Apply Now ↗
        </button>
      </div>
    </div>
  );
};

export default Results;
