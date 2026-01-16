import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";


const steps = ["Education", "Skills", "Interests", "Location"];

const locations = [
  "Delhi NCR",
  "Mumbai, Maharashtra",
  "Bengaluru, Karnataka",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Remote / Work from Home",
];

const Location = () => {
  const navigate = useNavigate();
  const stepIndex = 3; // Step 4 (Location)
  const [selectedLocation, setSelectedLocation] = useState("");
  const { userData, setUserData } = useUser();

  const handleFindInternships = () => {
  if (!selectedLocation) {
    alert("Please select a location");
    return;
  }

  setUserData({
    ...userData,
    location: selectedLocation
  });

  navigate("/results");
};



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

      {/* Step Name BELOW */}
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


        {/* Location Selection */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition
                ${
                  selectedLocation === loc
                    ? "border-[#1E3A8A] bg-[#F8FAFC]"
                    : "border-[#CBD5E1] bg-white"
                }`}
            >
              <input
                type="radio"
                checked={selectedLocation === loc}
                readOnly
                className="accent-[#1E3A8A]"
              />
              <span className="text-sm font-medium text-[#0F172A]">{loc}</span>
            </button>
          ))}

          {/* Add your location */}
          <button
            onClick={() => alert("Feature to add your location coming soon!")}
            className="flex items-center gap-2 px-5 py-4 rounded-xl border border-dashed border-gray-400 bg-white text-gray-500 font-medium mt-4 col-span-2 justify-center hover:bg-gray-50 transition"
          >
            + Add your location
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-10">
          <button
            onClick={() => navigate("/interests")}
            className="flex items-center gap-2 text-[#1E3A8A] font-medium"
          >
            ← Back
          </button>

          <button
           onClick={handleFindInternships}
           className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E40AF]"
          >
           Find Internships →
        </button>

        </div>
      </div>
    </div>
  );
};

export default Location;
