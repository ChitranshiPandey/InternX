import React from "react";
import {
  Briefcase,
  Users,
  FileText,
  TrendingUp,
  Target,
  Award,
  BookOpen,
  Code,
} from "lucide-react";

export default function OffCampus() {
  const sections = [
    {
      title: "Job Platforms",
      desc: "LinkedIn, Indeed, Internshala, Wellfound",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Referral Guidance",
      desc: "Learn how to ask and use referrals effectively",
      icon: <Users size={24} />,
    },
    {
      title: "Interview Prep",
      desc: "Resume screening, HR & technical interview tips",
      icon: <FileText size={24} />,
    },
    {
      title: "Application Strategy",
      desc: "Smart job application tactics and tracking",
      icon: <Target size={24} />,
    },
    {
      title: "Skill Assessment",
      desc: "Technical tests and coding challenges preparation",
      icon: <Code size={24} />,
    },
    {
      title: "Company Research",
      desc: "Learn about company culture, values, and expectations",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Portfolio Building",
      desc: "Create standout projects and personal branding",
      icon: <Award size={24} />,
    },
    {
      title: "Learning Resources",
      desc: "Courses, certifications, and upskilling opportunities",
      icon: <BookOpen size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-10 py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0F2A44] mb-4">
          Off-Campus Placements
        </h1>
        <p className="text-gray-600 max-w-3xl text-lg">
          InternX helps you find off-campus job opportunities through LinkedIn,
          company career pages, referral systems, and skill-based hiring
          platforms. Explore comprehensive resources to land your dream job.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFF3E0] text-[#FFA31A] flex items-center justify-center mb-4 group-hover:bg-[#FFA31A] group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2 text-[#0F2A44]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Additional Tips Section */}
      <div className="mt-16 bg-white p-8 rounded-2xl border">
        <h2 className="text-2xl font-bold text-[#0F2A44] mb-6">
          Pro Tips for Off-Campus Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#FFA31A] mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-[#0F2A44] mb-1">
                Build Your Network
              </h4>
              <p className="text-sm text-gray-600">
                Connect with alumni, attend tech events, and engage with
                industry professionals on LinkedIn to increase referral
                opportunities.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#FFA31A] mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-[#0F2A44] mb-1">
                Customize Applications
              </h4>
              <p className="text-sm text-gray-600">
                Tailor your resume and cover letter for each position to
                highlight relevant skills and experiences that match the job
                requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#FFA31A] mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-[#0F2A44] mb-1">
                Practice Consistently
              </h4>
              <p className="text-sm text-gray-600">
                Regular coding practice on platforms like LeetCode, HackerRank,
                and CodeChef keeps your problem-solving skills sharp.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#FFA31A] mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-[#0F2A44] mb-1">
                Track Your Progress
              </h4>
              <p className="text-sm text-gray-600">
                Maintain a spreadsheet of applications, interview dates, and
                follow-ups to stay organized and improve your success rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
