import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="w-[420px] bg-white p-8 rounded-2xl shadow-md border">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl">
            👤
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center text-[#0F2A44]">
          Welcome
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Create your InternX profile
        </p>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-xl mb-6">
          <button className="w-1/2 py-2 bg-white rounded-xl text-sm font-semibold">
            Sign Up
          </button>
          <button className="w-1/2 py-2 text-sm text-gray-500">
            Sign In
          </button>
        </div>

        {/* Form */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
        />

        <button className="w-full bg-[#0F2A44] text-white py-3 rounded-xl font-semibold">
          Create Account
        </button>

      </div>
    </div>
  );
};

export default Signup;
