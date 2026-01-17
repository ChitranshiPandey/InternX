// import React from "react";
// import { GraduationCap, CheckCircle, ArrowRight } from "lucide-react";

// export default function Internship() {
//   return (
//     <div className="min-h-screen bg-[#F8FAFC] px-8 py-16">
//       {/* Heading */}
//       <div className="max-w-5xl mx-auto text-center mb-14">
//         <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-6">
//           <GraduationCap size={28} />
//         </div>

//         <h1 className="text-4xl font-bold text-[#0F2A44]">
//           Internship to Placement
//         </h1>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Learn how to convert your internship into a full-time job with
//           structured guidance and preparation.
//         </p>
//       </div>

//       {/* Content Cards */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           {
//             title: "Skill Building",
//             desc: "Develop in-demand technical and soft skills during internships.",
//           },
//           {
//             title: "Performance Tracking",
//             desc: "Track your progress and get feedback from mentors.",
//           },
//           {
//             title: "Pre-Placement Offers",
//             desc: "Understand PPOs and how to maximize your chances.",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//           >
//             <div className="flex items-center gap-3 mb-4 text-green-600">
//               <CheckCircle size={22} />
//               <h3 className="text-lg font-semibold text-[#0F2A44]">
//                 {item.title}
//               </h3>
//             </div>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//       <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 text-center shadow-xl">
//         <h2 className="text-3xl font-bold mb-4">
//           Ready to turn your internship into a job?
//         </h2>
//         <p className="opacity-90 mb-8">
//           InternX helps you prepare, track progress, and crack placements.
//         </p>

//         <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
//           Get Internship Roadmap <ArrowRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  GraduationCap,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Target,
  Award,
  Users,
} from "lucide-react";

export default function InternshipToPlacement() {
  const [activeTab, setActiveTab] = useState("opportunities");

  const opportunities = [
    {
      id: 1,
      company: "Amazon",
      logo: "📦",
      position: "SDE Intern → Full-time SDE",
      duration: "6 months internship",
      conversionRate: "85%",
      stipend: "₹80,000/month",
      ctc: "₹28-32 LPA",
      skills: ["DSA", "Java/C++", "System Design"],
      deadline: "Feb 15, 2026",
    },
    {
      id: 2,
      company: "Google",
      logo: "🔍",
      position: "STEP Intern → SWE",
      duration: "3 months internship",
      conversionRate: "75%",
      stipend: "₹1,00,000/month",
      ctc: "₹35-40 LPA",
      skills: ["Algorithms", "Python", "Problem Solving"],
      deadline: "Jan 30, 2026",
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "🪟",
      position: "Software Engineering Intern",
      duration: "6 months internship",
      conversionRate: "80%",
      stipend: "₹85,000/month",
      ctc: "₹30-35 LPA",
      skills: ["C#", "Azure", "DSA"],
      deadline: "Feb 20, 2026",
    },
    {
      id: 4,
      company: "Flipkart",
      logo: "🛒",
      position: "Product Intern → PM",
      duration: "6 months internship",
      conversionRate: "70%",
      stipend: "₹60,000/month",
      ctc: "₹20-25 LPA",
      skills: ["Product Management", "Analytics", "Communication"],
      deadline: "Feb 10, 2026",
    },
    {
      id: 5,
      company: "Goldman Sachs",
      logo: "💼",
      position: "Technology Analyst Intern",
      duration: "10 weeks internship",
      conversionRate: "90%",
      stipend: "₹1,20,000/month",
      ctc: "₹35-42 LPA",
      skills: ["Java", "Finance", "DSA"],
      deadline: "Jan 25, 2026",
    },
    {
      id: 6,
      company: "Adobe",
      logo: "🎨",
      position: "Design Intern → UX Designer",
      duration: "5 months internship",
      conversionRate: "65%",
      stipend: "₹70,000/month",
      ctc: "₹18-22 LPA",
      skills: ["Figma", "UI/UX", "Prototyping"],
      deadline: "Feb 5, 2026",
    },
  ];

  const conversionTips = [
    {
      title: "Excel in Your Work",
      icon: <Target size={24} />,
      desc: "Deliver high-quality work consistently. Meet deadlines, take ownership of projects, and go beyond expectations.",
      points: [
        "Complete assigned tasks efficiently",
        "Show initiative on new projects",
        "Document your achievements",
      ],
    },
    {
      title: "Build Strong Relationships",
      icon: <Users size={24} />,
      desc: "Network with team members, mentors, and leadership. Strong relationships increase conversion chances significantly.",
      points: [
        "Attend team meetings actively",
        "Seek regular feedback",
        "Build rapport with your manager",
      ],
    },
    {
      title: "Show Long-term Interest",
      icon: <TrendingUp size={24} />,
      desc: "Express genuine interest in the company's mission and your desire to contribute long-term to their goals.",
      points: [
        "Learn about company culture",
        "Participate in company events",
        "Ask about full-time roles",
      ],
    },
    {
      title: "Continuous Learning",
      icon: <Lightbulb size={24} />,
      desc: "Upskill constantly and adapt to new technologies. Show you're invested in growing with the company.",
      points: [
        "Take internal training courses",
        "Learn from senior developers",
        "Stay updated with tech stack",
      ],
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      company: "Microsoft",
      role: "SDE-1",
      story:
        "Started as a summer intern in 2024, received PPO after 3 months. Now working on Azure Cloud Services.",
      tips: "Focus on code quality and always ask questions when stuck.",
    },
    {
      name: "Rahul Verma",
      company: "Amazon",
      role: "SDE-2",
      story:
        "Interned for 6 months, converted to full-time. Promoted to SDE-2 within 18 months.",
      tips: "Take ownership of your projects and communicate progress regularly.",
    },
    {
      name: "Ananya Desai",
      company: "Google",
      role: "Product Manager",
      story:
        "STEP intern to full-time SWE, then transitioned to PM role after 2 years.",
      tips: "Network across teams and showcase your product thinking skills.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-10 py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0F2A44] mb-4">
          Internship to Placement
        </h1>
        <p className="text-gray-600 max-w-3xl text-lg">
          Transform your internship into a full-time opportunity. Explore
          companies with high conversion rates and learn strategies to secure
          that Pre-Placement Offer (PPO).
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b">
        <button
          onClick={() => setActiveTab("opportunities")}
          className={`px-6 py-3 font-semibold transition-all relative ${
            activeTab === "opportunities"
              ? "text-[#FFA31A]"
              : "text-gray-600 hover:text-[#0F2A44]"
          }`}
        >
          Internship Opportunities
          {activeTab === "opportunities" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFA31A]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("tips")}
          className={`px-6 py-3 font-semibold transition-all relative ${
            activeTab === "tips"
              ? "text-[#FFA31A]"
              : "text-gray-600 hover:text-[#0F2A44]"
          }`}
        >
          Conversion Tips
          {activeTab === "tips" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFA31A]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("stories")}
          className={`px-6 py-3 font-semibold transition-all relative ${
            activeTab === "stories"
              ? "text-[#FFA31A]"
              : "text-gray-600 hover:text-[#0F2A44]"
          }`}
        >
          Success Stories
          {activeTab === "stories" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFA31A]"></div>
          )}
        </button>
      </div>

      {/* Opportunities Tab */}
      {activeTab === "opportunities" && (
        <div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle
              size={24}
              className="text-blue-600 flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                Application Deadlines Approaching!
              </h3>
              <p className="text-sm text-blue-700">
                Several companies are accepting applications now. Apply early to
                increase your chances.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-3xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0F2A44]">
                        {job.company}
                      </h3>
                      <p className="text-sm text-gray-600">{job.position}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {job.conversionRate} PPO
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-[#0F2A44]">
                      {job.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Stipend:</span>
                    <span className="font-medium text-[#0F2A44]">
                      {job.stipend}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Full-time CTC:</span>
                    <span className="font-medium text-[#0F2A44]">
                      {job.ctc}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Deadline:</span>
                    <span className="font-medium text-red-600">
                      {job.deadline}
                    </span>
                  </div>
                </div>

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

                <button className="w-full bg-[#0F2A44] hover:bg-[#FF8F00] text-white font-semibold py-3 rounded-xl transition-all duration-300">
                  Apply Now on InternX
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conversion Tips Tab */}
      {activeTab === "tips" && (
        <div className="space-y-6">
          {conversionTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFF3E0] text-[#FFA31A] flex items-center justify-center flex-shrink-0">
                  {tip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0F2A44] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{tip.desc}</p>
                  <ul className="space-y-2">
                    {tip.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-600 flex-shrink-0 mt-0.5"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-[#0F2A44] to-[#2b4258] p-8 rounded-2xl text-white mt-8">
            <h3 className="text-2xl font-bold mb-3">
              Pro Tip: The First 30 Days Matter Most
            </h3>
            <p className="text-white/90 mb-4">
              Your first month sets the tone for your entire internship. Make a
              strong impression by being proactive, asking smart questions, and
              delivering quality work from day one. Companies often make PPO
              decisions based on early performance.
            </p>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Award size={20} />
              <span>
                Students who receive PPOs typically excel in the first 30 days
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Success Stories Tab */}
      {activeTab === "stories" && (
        <div className="space-y-6">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFA31A] to-[#FF8F00] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F2A44]">
                    {story.name}
                  </h3>
                  <p className="text-[#FFA31A] font-semibold">
                    {story.role} at {story.company}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {story.story}
              </p>

              <div className="bg-[#FFF3E0] border-l-4 border-[#FFA31A] p-4 rounded-r-lg">
                <p className="text-sm font-semibold text-[#0F2A44] mb-1">
                  💡 Advice for You:
                </p>
                <p className="text-sm text-gray-700 italic">"{story.tips}"</p>
              </div>
            </div>
          ))}

          <div className="bg-[#0F2A44] p-8 rounded-2xl text-white text-center">
            <GraduationCap size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Want to Share Your Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you successfully converted your internship to a full-time role,
              inspire others by sharing your journey with the InternX community.
            </p>
            <button className="bg-[#0F2A44] hover:bg-[#253544] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Submit Your Story
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
