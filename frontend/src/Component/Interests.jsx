import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = ["Education", "Skills", "Interests", "Location"];

const sectors = [
  "IT & Technology",
  "Finance & Banking",
  "Marketing & Sales",
  "Healthcare",
  "Manufacturing",
  "Education",
  "Government",
  "Agriculture",
];

const Interests = () => {
  const navigate = useNavigate();
  const stepIndex = 2;

  const [selectedSectors, setSelectedSectors] = useState([
  "IT & Technology",
  "Marketing & Sales",
  "Manufacturing",
]);


  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-10 bg-white p-10 rounded-xl shadow-sm">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-[#0F172A]">
          ✨ Tell us about yourself
        </h1>
        <p className="text-center text-[#64748B] mt-2">
          Complete these steps to get personalized internship recommendations
        </p>

        {/* Stepper */}
{/* Stepper */}
<div className="flex items-center justify-between mt-10">
  {steps.map((step, index) => (
    <div key={step} className="flex-1 flex flex-col items-center">

      {/* Circle + Line */}
      <div className="flex items-center w-full">
        
        {/* Circle */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold z-10
            ${
              index < stepIndex
                ? "bg-[#1E3A8A] text-white"
                : index === stepIndex
                ? "bg-[#1E3A8A] text-white ring-4 ring-blue-200"
                : "bg-gray-200 text-gray-500"
            }`}
        >
          {index < stepIndex ? "✓" : index + 1}
        </div>

        {/* Line */}
        {index !== steps.length - 1 && (
          <div className="flex-1 h-[3px] bg-gray-200 mx-2 relative overflow-hidden">
            <div
              className={`absolute left-0 top-0 h-full bg-[#1E3A8A] transition-all duration-500
                ${index < stepIndex ? "w-full" : "w-0"}`}
            ></div>
          </div>
        )}
      </div>

      {/* 🔽 Step Name (NEW) */}
      <span
        className={`mt-2 text-xs font-medium
          ${
            index === stepIndex
              ? "text-[#1E3A8A]"
              : "text-gray-400"
          }`}
      >
        {step}
      </span>
    </div>
  ))}
</div>

{/* Interests Heading */}
<h2 className="text-xl font-semibold mt-10 mb-1 text-[#0F172A]">
  Your Interests
</h2>

<p className="text-sm text-gray-500 mb-6">
  Select your key interests (select multiple)
</p>


        {/* Sector Interest */}
        <div className="grid grid-cols-2 gap-4 mt-6">
  {sectors.map((sector) => {
    const isSelected = selectedSectors.includes(sector);

    return (
      <button
        key={sector}
        onClick={() => {
          setSelectedSectors((prev) =>
            prev.includes(sector)
              ? prev.filter((s) => s !== sector)
              : [...prev, sector]
          );
        }}
        className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition
          ${
            isSelected
              ? "border-[#1E3A8A] bg-[#F8FAFC]"
              : "border-[#CBD5E1] bg-white"
          }`}
      >
        {/* Circle Indicator */}
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center border
            ${
              isSelected
                ? "bg-[#1E3A8A] border-[#1E3A8A]"
                : "border-[#94A3B8]"
            }`}
        >
          {isSelected && (
            <span className="w-2 h-2 bg-white rounded-full"></span>
          )}
        </div>

        {/* Text */}
        <span className="text-sm font-medium text-[#0F172A]">
          {sector}
        </span>
      </button>
    );
  })}
</div>


        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-10">
          <button
            onClick={() => navigate("/skills")}
            className="flex items-center gap-2 text-[#1E3A8A] font-medium"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/location")}

            className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E40AF]"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interests;
