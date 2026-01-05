import React from "react";

const SkillGap = ({ userSkills }) => {
  const requiredSkills = ["React", "JavaScript", "Git", "Communication"];

  const matchedSkills = requiredSkills.filter(skill =>
    userSkills.includes(skill)
  );

  const missingSkills = requiredSkills.filter(
    skill => !userSkills.includes(skill)
  );

  const percentage = Math.round(
    (matchedSkills.length / requiredSkills.length) * 100
  );

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h3 className="text-lg font-semibold text-[#0F2A44] mb-2">
        Profile Readiness
      </h3>

      <div className="text-3xl font-bold text-[#FFA31A] mb-2">
        {percentage}%
      </div>

      <p className="text-sm text-gray-600 mb-2">
        You are eligible for most internships
      </p>

      {missingSkills.length > 0 && (
        <p className="text-sm text-red-500">
          Improve skills: {missingSkills.join(", ")}
        </p>
      )}
    </div>
  );
};

export default SkillGap;
