import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const steps = ["Education", "Skills", "Interests", "Location"];

const Education = () => {
  const navigate = useNavigate();
    const [selectedEducation, setSelectedEducation] = useState([]);
    const stepIndex = 0;

      const educationOptions = [
    "High School",
    "Undergraduate",
    "Postgraduate",
    "Diploma / ITI",
  ];




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

          {/* STEPPER */}
            {/* STEPPER */}
<div className="flex items-center justify-between mb-10">
  {steps.map((step, i) => (
    <div key={i} className="flex-1 flex flex-col items-center">
      
      {/* Circle + Line wrapper */}
      <div className="flex items-center w-full">
        
        {/* Circle */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center z-10
          ${
            i < stepIndex
              ? "bg-[#0F2A44] text-white"
              : i === stepIndex
              ? "bg-[#0F2A44] text-white ring-4 ring-blue-200"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {i < stepIndex ? "✓" : i + 1}
        </div>

        {/* Line */}
        {i !== steps.length - 1 && (
          <div className="flex-1 h-1 bg-gray-200 mx-2">
            <div
              className={`h-1 bg-[#0F2A44] transition-all duration-500
              ${i < stepIndex ? "w-full" : "w-0"}`}
            ></div>
          </div>
        )}
      </div>

      {/* Step Label (THIS IS NEW ✨) */}
      <span
        className={`mt-2 text-xs font-medium
        ${
          i === stepIndex
            ? "text-[#0F2A44]"
            : "text-gray-400"
        }`}
      >
        {step}
      </span>
    </div>
  ))}
</div>



          {/* Education Level */}
          <h3 className="font-semibold mb-1">Education Level</h3>
          <p className="text-sm text-gray-500 mb-4">
            Select your current education level
          </p>

          <div className="grid grid-cols-2 gap-4">
  {educationOptions.map((item) => {
    const isSelected = selectedEducation.includes(item);

    return (
      <button
        key={item}
        onClick={() =>
          setSelectedEducation((prev) =>
            prev.includes(item)
              ? prev.filter((i) => i !== item)
              : [...prev, item]
          )
        }
        className={`flex items-center gap-4 px-5 py-4 rounded-xl border
          ${
            isSelected
              ? "border-[#0F2A44] bg-[#F8FAFC]"
              : "border-gray-300 bg-white"
          }`}
      >
        {/* ROUND CHECK */}
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
          {item}
        </span>
      </button>
    );
  })}
</div>


          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-[#F97316] transition"
            >
              ← Back
            </button>

            <button
              onClick={() => navigate("/skills")}
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

export default Education;
