import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const steps = ["Education", "Skills", "Interests", "Location"];
const skillsList = [
  "Programming",
  "Communication",
  "Analytical Thinking",
  "Leadership",
  "Teamwork",
  "Problem Solving",
  "Creativity",
  "Technical Writing",
];

const Skills = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const stepIndex = 1;



  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      

      {/* CONTENT */}
      <div className="flex justify-center pt-12 px-4">
        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-md p-8">

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center mb-2">✨ Tell us about yourself</h2>
          <p className="text-center text-gray-500 mb-8">
            Complete these steps to get personalized internship recommendations
          </p>

          {/* Step circles */}
          {/* STEPPER */}
<div className="mb-10">
  <div className="flex items-center">
    {steps.map((step, index) => (
      <div key={index} className="flex items-center w-full">
        
        {/* CIRCLE */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold z-10
            ${
              index <= stepIndex
                ? "bg-[#0F2A44] text-white"
                : "bg-gray-200 text-gray-500"
            }`}
        >
          {index < stepIndex ? "✓" : index + 1}
        </div>

        {/* LINE */}
        {index !== steps.length - 1 && (
          <div className="flex-1 h-[4px] mx-2 bg-gray-200 rounded overflow-hidden">
            <div
              className="h-full bg-[#0F2A44] transition-all duration-500"
              style={{
                width: index < stepIndex ? "100%" : "0%",
              }}
            ></div>
          </div>
        )}
      </div>
    ))}
  </div>

  {/* LABELS */}
  <div className="flex justify-between text-sm text-gray-600 mt-2">
    {steps.map((step, index) => (
      <span key={index} className="w-1/4 text-center">
        {step}
      </span>
    ))}
  </div>
</div>


          {/* Skills Selection */}
          <h3 className="font-semibold mb-1">Your Skills</h3>
          <p className="text-sm text-gray-500 mb-4">Select your key skills (select multiple)</p>

          <div className="grid grid-cols-2 gap-4">
  {skillsList.map((skill) => {
    const isSelected = selectedSkills.includes(skill);

    return (
      <button
        key={skill}
        onClick={() =>
          setSelectedSkills((prev) =>
            prev.includes(skill)
              ? prev.filter((s) => s !== skill)
              : [...prev, skill]
          )
        }
        className={`flex items-center gap-4 px-5 py-4 rounded-xl border
          ${
            isSelected
              ? "border-[#0F2A44] bg-[#F8FAFC]"
              : "border-gray-300 bg-white"
          }`}
      >
        {/* Round blue tick */}
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center border
            ${
              isSelected
                ? "bg-[#0F2A44] border-[#0F2A44]"
                : "border-gray-400"
            }`}
        >
          {isSelected && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
        </div>

        <span className="text-sm font-medium text-gray-800">
          {skill}
        </span>
        </button>
        );
      })}
        </div>


          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => navigate("/onboarding/education")}
              className="text-gray-500 hover:text-[#F97316] transition"
            >
              ← Back
            </button>

            <button
              onClick={() => navigate("/interests")}
              className="bg-[#0F2A44] text-white px-6 py-2 rounded-lg"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;



