import { useState } from "react";
import GoogleLogin from "./GoogleLogin";

const AuthPage = () => {
  const [mode, setMode] = useState("signin");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar will show automatically via App.jsx */}
      <div className="flex-grow flex items-center justify-center bg-[#F8FAFC] px-4">
        <div className="w-full max-w-md bg-white rounded-2xl border shadow-sm p-8">
          {/* Icon */}
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#EEF2FF] flex items-center justify-center text-xl">
            👤
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-[#0F2A44]">Welcome</h2>
          <p className="text-center text-sm text-gray-500 mt-1">
            {mode === "signin"
              ? "Sign in to access your profile and saved internships"
              : "Create your account to get started"}
          </p>

          {/* Tabs */}
          <div className="mt-6 flex bg-[#F3F4F6] rounded-xl p-1">
            <button
              onClick={() => setMode("signin")}
              className={`w-1/2 py-2 rounded-lg text-sm font-semibold ${
                mode === "signin" ? "bg-white shadow text-[#0F2A44]" : "text-gray-500"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`w-1/2 py-2 rounded-lg text-sm font-semibold ${
                mode === "signup" ? "bg-white shadow text-[#0F2A44]" : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F2A44] text-white py-3 rounded-xl font-semibold"
            >
              {mode === "signin" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Auth */}
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

























// import { useState } from "react";
// import GoogleLogin from "./GoogleLogin";

// const AuthPage = () => {
//   const [mode, setMode] = useState("signin");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl border shadow-sm p-8">

//         {/* Icon */}
//         <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#EEF2FF] flex items-center justify-center text-xl">
//           👤
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center text-[#0F2A44]">
//           Welcome
//         </h2>
//         <p className="text-center text-sm text-gray-500 mt-1">
//           {mode === "signin"
//             ? "Sign in to access your profile and saved internships"
//             : "Create your account to get started"}
//         </p>

//         {/* Tabs */}
//         <div className="mt-6 flex bg-[#F3F4F6] rounded-xl p-1">
//           <button
//             onClick={() => setMode("signin")}
//             className={`w-1/2 py-2 rounded-lg text-sm font-semibold ${
//               mode === "signin"
//                 ? "bg-white shadow text-[#0F2A44]"
//                 : "text-gray-500"
//             }`}
//           >
//             Sign In
//           </button>
//           <button
//             onClick={() => setMode("signup")}
//             className={`w-1/2 py-2 rounded-lg text-sm font-semibold ${
//               mode === "signup"
//                 ? "bg-white shadow text-[#0F2A44]"
//                 : "text-gray-500"
//             }`}
//           >
//             Sign Up
//           </button>
//         </div>

//         {/* Form */}
//         <form className="mt-6 space-y-4">
//           <div>
//             <label className="text-sm font-medium">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="mt-1 w-full px-4 py-2 border rounded-xl"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="mt-1 w-full px-4 py-2 border rounded-xl"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#0F2A44] text-white py-3 rounded-xl font-semibold"
//           >
//             {mode === "signin" ? "Sign In" : "Create Account"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center gap-3 my-6">
//           <div className="flex-1 h-px bg-gray-200" />
//           <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
//           <div className="flex-1 h-px bg-gray-200" />
//         </div>

//         {/* Google Auth */}
//         <GoogleLogin />
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
