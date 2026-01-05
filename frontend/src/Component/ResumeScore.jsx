import React, { useState } from "react";

const ResumeScore = () => {
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState(null);
  const [tip, setTip] = useState("");

  const checkResume = () => {
    const keywords = [
      "project",
      "internship",
      "react",
      "javascript",
      "team",
    ];

    let matched = 0;

    keywords.forEach(word => {
      if (resumeText.toLowerCase().includes(word)) {
        matched++;
      }
    });

    const calculatedScore = ((matched / keywords.length) * 10).toFixed(1);

    setScore(calculatedScore);

    setTip(
      calculatedScore < 7
        ? "Add more projects, technical skills, and internships"
        : "Great resume! You're ready to apply 🚀"
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm mt-8">
      <h3 className="text-lg font-semibold text-[#0F2A44] mb-4">
        Resume Score
      </h3>

      <textarea
        rows="5"
        placeholder="Paste your resume text here..."
        className="w-full p-3 border rounded-lg mb-4"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />

      <button
        onClick={checkResume}
        className="bg-[#0F2A44] text-white px-6 py-2 rounded-lg font-semibold"
      >
        Check Resume
      </button>

      {score && (
        <div className="mt-4">
          <p className="text-xl font-bold text-[#FFA31A]">
            Score: {score}/10
          </p>
          <p className="text-sm text-gray-600 mt-1">{tip}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeScore;
