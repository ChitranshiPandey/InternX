import React from "react";
import { useNavigate, Link } from "react-router-dom";
import GoogleLogin from "./Auth/GoogleLogin";
import ChatButton from "./Assistant/ChatButton";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Navbar */}

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-6 pt-24 pb-32">
        {/* Badge */}
        <span className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6FAF5] text-[#047857] text-sm font-medium">
          ✨ PM Internship Scheme 2025
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight text-[#111827]">
          Find the right internship <br className="hidden md:block" />
          for you in minutes
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-[#6B7280] text-lg">
          AI-powered recommendations tailored to your skills, education, and
          interests
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4">
          <button
            onClick={() => navigate("/onboarding/education")}
            className="bg-[#FFA31A] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Get Started →
          </button>

          <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold text-[#0F2A44] hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </main>

      {/* Stats + Why Choose Section */}
      {/* <section className="bg-[#FFF9F2] py-20"> */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFF] to-[#FFF7ED]">
        {/* Stats */}
        {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20 px-6">
    
    <div>
      <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#1E3A8A] text-xl">
        💼
      </div>
      <h3 className="text-4xl font-bold text-[#111827]">10,000+</h3>
      <p className="text-[#64748B] mt-1">Internships Available</p>
    </div>

    <div>
      <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#1E3A8A] text-xl">
        🏢
      </div>
      <h3 className="text-4xl font-bold text-[#111827]">500+</h3>
      <p className="text-[#64748B] mt-1">Partner Companies</p>
    </div>

    <div>
      <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#1E3A8A] text-xl">
        👩‍🎓
      </div>
      <h3 className="text-4xl font-bold text-[#111827]">50,000+</h3>
      <p className="text-[#64748B] mt-1">Students Placed</p>
    </div>

  </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
          {[
            {
              value: "10,000+",
              label: "Internships Available",
              color: "text-blue-600",
            },
            {
              value: "500+",
              label: "Partner Companies",
              color: "text-orange-500",
            },
            {
              value: "50,000+",
              label: "Students Placed",
              color: "text-green-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 hover:scale-105 transition-all duration-300"
            >
              <h2 className={`text-4xl font-bold ${item.color}`}>
                {item.value}
              </h2>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="max-w-6xl mx-auto text-center px-6">
          {/* <h2 className="text-4xl font-bold text-[#111827] mb-4">
      Why Choose InternX?
    </h2>

    <p className="text-[#64748B] max-w-2xl mx-auto mb-14">
      We connect talented students across India with quality internship opportunities
    </p> */}
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Why Choose <span className="text-blue-600">InternX</span>?
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            We connect talented students across India with verified,
            high-quality internship opportunities.
          </p>

          {/* Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* <div className="bg-white rounded-2xl p-8 border hover:shadow-md transition">
        <div className="w-12 h-12 mb-4 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FFA31A] text-xl">
          ✨
        </div>
        <h3 className="text-lg font-semibold mb-2">AI-Powered Matching</h3>
        <p className="text-sm text-[#64748B]">
          Our intelligent algorithm matches you with internships based on your unique profile.
        </p>
      </div> */}
            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-2xl mb-6 group-hover:scale-110 transition">
                ✨
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                AI-Powered Matching
              </h3>
              <p className="text-gray-600">
                Smart algorithms match you with internships based on your skills
                and interests.
              </p>
            </div>

            {/* <div className="bg-white rounded-2xl p-8 border hover:shadow-md transition">
        <div className="w-12 h-12 mb-4 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FFA31A] text-xl">
          🛡️
        </div>
        <h3 className="text-lg font-semibold mb-2">Verified Opportunities</h3>
        <p className="text-sm text-[#64748B]">
          All internships are from trusted organizations partnered with the government.
        </p>
      </div> */}

            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-2xl mb-6 group-hover:scale-110 transition">
                🛡️
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Verified Opportunities
              </h3>
              <p className="text-gray-600">
                All internships are verified and partnered with trusted
                organizations.
              </p>
            </div>

            {/* 
      <div className="bg-white rounded-2xl p-8 border hover:shadow-md transition">
        <div className="w-12 h-12 mb-4 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FFA31A] text-xl">
          ✅
        </div>
        <h3 className="text-lg font-semibold mb-2">Easy Application</h3>
        <p className="text-sm text-[#64748B]">
          Apply to multiple internships with just a few clicks.
        </p>
      </div> */}
            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 text-2xl mb-6 group-hover:scale-110 transition">
                ✅
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Easy Application
              </h3>
              <p className="text-gray-600">
                Apply to multiple internships with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 -z-10 w-[520px] h-[520px] bg-[#FFE7C2] rounded-full blur-3xl opacity-60"></div>

      {/* Footer Section */}
      <footer className="bg-[#FBF7F3] border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0F2A44] rounded-lg flex items-center justify-center text-white font-bold">
                🎓
              </div>
              <h3 className="text-lg font-semibold text-[#0F2A44]">
                InternX <span className="text-sm font-normal">Platform</span>
              </h3>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed">
              Connecting talented students with quality internship opportunities
              across India using AI-powered matching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#0F2A44]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[#475569] text-sm">
              <li className="hover:text-[#FFA31A] cursor-pointer">Home</li>
              <li className="hover:text-[#FFA31A] cursor-pointer">
                Get Started
              </li>
              <li className="hover:text-[#FFA31A] cursor-pointer">About</li>
              <li className="hover:text-[#FFA31A] cursor-pointer">
                Ministry of Corporate Affairs
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#0F2A44]">
              Contact Us
            </h4>
            <p className="text-sm text-[#475569]">📧 support@internx.ai</p>
            <p className="text-sm text-[#475569] mt-2">
              📞 Helpline: 1800-XXX-XXXX
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 px-8 py-4 text-sm text-[#64748B] text-center">
          © 2026 InternX. All rights reserved.
        </div>
      </footer>
      {/* AI Assistant */}
      <ChatButton />
    </div>
  );
};

export default Home;
