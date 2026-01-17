// import React from "react";

// export default function Startup() {
//   return (
//     <div className="min-h-screen bg-[#F8FAFC] px-10 py-16">
//       <h1 className="text-4xl font-bold text-[#0F2A44]">
//         Startup & Remote Jobs
//       </h1>
//       <p className="text-gray-600 mt-4">
//         Find startup and remote job opportunities with InternX.
//       </p>
//     </div>
//   );}
//

import React, { useState } from "react";
import {
  Rocket,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function StartupRemoteJobs() {
  const [filter, setFilter] = useState("all");

  const jobs = [
    {
      id: 1,
      company: "TechFlow AI",
      logo: "🚀",
      position: "Frontend Developer",
      type: "Remote",
      location: "Anywhere",
      salary: "₹6-10 LPA",
      experience: "0-2 years",
      skills: ["React", "JavaScript", "Tailwind CSS"],
      applyLink: "https://example.com/apply/1",
    },
    {
      id: 2,
      company: "DataVerse",
      logo: "📊",
      position: "Data Analyst Intern",
      type: "Remote",
      location: "India",
      salary: "₹3-5 LPA",
      experience: "Fresher",
      skills: ["Python", "SQL", "Excel"],
      applyLink: "https://example.com/apply/2",
    },
    {
      id: 3,
      company: "CloudNine Solutions",
      logo: "☁️",
      position: "Backend Developer",
      type: "Startup",
      location: "Bangalore",
      salary: "₹8-12 LPA",
      experience: "1-3 years",
      skills: ["Node.js", "MongoDB", "AWS"],
      applyLink: "https://example.com/apply/3",
    },
    {
      id: 4,
      company: "DesignCraft",
      logo: "🎨",
      position: "UI/UX Designer",
      type: "Remote",
      location: "Anywhere",
      salary: "₹4-7 LPA",
      experience: "0-2 years",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      applyLink: "https://example.com/apply/4",
    },
    {
      id: 5,
      company: "FinTech Innovations",
      logo: "💰",
      position: "Full Stack Developer",
      type: "Startup",
      location: "Mumbai",
      salary: "₹10-15 LPA",
      experience: "2-4 years",
      skills: ["React", "Node.js", "PostgreSQL"],
      applyLink: "https://example.com/apply/5",
    },
    {
      id: 6,
      company: "GreenTech Labs",
      logo: "🌱",
      position: "Marketing Intern",
      type: "Remote",
      location: "India",
      salary: "₹2-4 LPA",
      experience: "Fresher",
      skills: ["Content Writing", "Social Media", "SEO"],
      applyLink: "https://example.com/apply/6",
    },
    {
      id: 7,
      company: "CodeCraft Studio",
      logo: "💻",
      position: "Mobile App Developer",
      type: "Startup",
      location: "Hyderabad",
      salary: "₹7-11 LPA",
      experience: "1-3 years",
      skills: ["React Native", "Flutter", "Firebase"],
      applyLink: "https://example.com/apply/7",
    },
    {
      id: 8,
      company: "AI Minds",
      logo: "🤖",
      position: "Machine Learning Engineer",
      type: "Remote",
      location: "Anywhere",
      salary: "₹12-18 LPA",
      experience: "2-4 years",
      skills: ["Python", "TensorFlow", "PyTorch"],
      applyLink: "https://example.com/apply/8",
    },
  ];

  const filteredJobs =
    filter === "all"
      ? jobs
      : jobs.filter((job) => job.type.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-10 py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0F2A44] mb-4">
          Startup & Remote Jobs
        </h1>
        <p className="text-gray-600 max-w-3xl text-lg">
          Discover exciting opportunities at innovative startups and
          remote-first companies. Build your career with flexibility and growth
          potential.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            filter === "all"
              ? "bg-[#FFA31A] text-white shadow-md"
              : "bg-white text-gray-600 border hover:border-[#FFA31A]"
          }`}
        >
          All Jobs
        </button>
        <button
          onClick={() => setFilter("remote")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            filter === "remote"
              ? "bg-[#FFA31A] text-white shadow-md"
              : "bg-white text-gray-600 border hover:border-[#FFA31A]"
          }`}
        >
          Remote Only
        </button>
        <button
          onClick={() => setFilter("startup")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            filter === "startup"
              ? "bg-[#FFA31A] text-white shadow-md"
              : "bg-white text-gray-600 border hover:border-[#FFA31A]"
          }`}
        >
          Startup Only
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Company Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-2xl">
                  {job.logo}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0F2A44]">
                    {job.position}
                  </h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  job.type === "Remote"
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {job.type}
              </span>
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-[#FFA31A]" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <DollarSign size={16} className="text-[#FFA31A]" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Briefcase size={16} className="text-[#FFA31A]" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={16} className="text-[#FFA31A]" />
                <span>Full Time</span>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#F8FAFC] text-[#0F2A44] text-xs font-medium rounded-lg border"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Apply Button */}
            <button
              onClick={() => window.open(job.applyLink, "_blank")}
              className="w-full bg-[#2b428d] hover:bg-[#323f6e] text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Apply Now
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-16">
          <Rocket size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">
            No jobs found for this filter.
          </p>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-[#0F2A44] to-[#1a4363] p-8 rounded-2xl text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Can't Find the Right Job?</h2>
        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
          Set up job alerts and get notified when new opportunities matching
          your profile are posted.
        </p>
        <button className="bg-[#FFA31A] hover:bg-[#FF8F00] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
          Create Job Alert
        </button>
      </div>
    </div>
  );
}
