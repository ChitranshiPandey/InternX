import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import NotificationBell from "./Notifications/NotificationBell";

const Navbar = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    // Navigate to home page with hash
    navigate("/#why-choose");
  };

  return (
    <nav className="navbar px-6 md:px-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-[#0F2A44] rounded-lg flex items-center justify-center text-white font-bold text-lg">
          🎓
        </div>
        <span className="font-semibold text-white text-lg">
          InternX <span className="text-sm text-white/80">Powered by AI</span>
        </span>
      </div>

      {/* Links */}
      {/* <div className="hidden md:flex gap-10 text-sm font-medium nav-links">
        <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
        <span onClick={() => navigate("/dashboard")} className="cursor-pointer text-yellow-400 font-semibold">
          Dashboard
        </span>
        <span onClick={handleAboutClick} className="cursor-pointer">About</span>
        <span className="cursor-pointer">Contact</span>
      </div> */}
      <div className="hidden md:flex gap- 3 text-sm font-medium nav-links">
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Home
        </span>

        <span
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer text-yellow-400 font-semibold"
        >
          Dashboard
        </span>

        <span
          onClick={() => navigate("/placements")}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Placements
        </span>

        <span
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          About
        </span>

        <span
          onClick={() => navigate("/contact")}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Contact
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-sm text-white">🌐 English</button>

        <button
          onClick={() => navigate("/chat")}
          className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm hover:bg-purple-700"
        >
          🤖 Chat AI
        </button>

        <NotificationBell />

        <button onClick={() => navigate("/auth")} className="signin-btn">
      <div className="flex items-center gap-6">
        <button className="text-sm text-white">🌐 English</button>

        <button
          onClick={() => navigate("/chat")}
          className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm hover:bg-purple-700"
        >
          🤖 Chat AI
        </button>

        <NotificationBell />

        <button
          onClick={() => navigate("/auth")}
          className="signin-btn"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;





























// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import NotificationBell from "./Notifications/NotificationBell";


// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar px-6 md:px-10">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="w-9 h-9 bg-[#0F2A44] rounded-lg flex items-center justify-center text-white font-bold text-lg">
//           🎓
//         </div>
//         <span className="font-semibold text-white text-lg">
//           InternX <span className="text-sm text-white/80">Powered by AI</span>
//         </span>
//       </div>

//       {/* Links */}
//       <div className="hidden md:flex gap-10 text-sm font-medium nav-links">
//         <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
//         <span onClick={() => navigate("/dashboard")} className="cursor-pointer text-yellow-400 font-semibold">
//           Dashboard
//         </span>
//         <span onClick={() => navigate("/about")} className="cursor-pointer">About</span>
//         <span className="cursor-pointer">Contact</span>
//       </div>

//      <div className="flex items-center gap-6">
//   <button className="text-sm text-white">🌐 English</button>

//   <button
//     onClick={() => navigate("/chat")}
//     className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm hover:bg-purple-700"
//   >
//     🤖 Chat AI
//   </button>

//   <NotificationBell />

//   <button
//     onClick={() => navigate("/auth")}
//     className="signin-btn"
//   >
//     Sign In
//   </button>
// </div>


//     </nav>
//   );
// };

// export default Navbar;



























// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar px-6 md:px-10">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="w-9 h-9 bg-[#0F2A44] rounded-lg flex items-center justify-center text-white font-bold text-lg">
//           🎓
//         </div>
//         <span className="font-semibold text-white text-lg">
//           InternX <span className="text-sm text-white/80">Powered by AI</span>
//         </span>
//       </div>

//       {/* Links */}
//       <div className="hidden md:flex gap-10 text-sm font-medium nav-links">
//         <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
//         <span onClick={() => navigate("/about")} className="cursor-pointer">About</span>
//         <span className="cursor-pointer">Contact</span>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex items-center gap-6">
//         <button className="text-sm text-white">🌐 English</button>
//         <button
//           onClick={() => navigate("/auth")}
//           className="signin-btn"
//         >
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//normal plane nav bar

// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar px-6 md:px-10">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="w-9 h-9 bg-[#FFB766] rounded-lg flex items-center justify-center text-white font-bold text-lg">
//           🎓
//         </div>
//         <span className="font-semibold text-white text-lg">
//           InternX <span className="text-sm text-white/80">Powered by AI</span>
//         </span>
//       </div>

//       {/* Links */}
//       <div className="hidden md:flex gap-10 text-sm font-medium nav-links">
//         <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
//         <span onClick={() => navigate("/about")} className="cursor-pointer">About</span>
//         <span className="cursor-pointer">Contact</span>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex items-center gap-6">
//         <button className="text-sm text-white">🌐 English</button>
//         <button
//           onClick={() => navigate("/auth")}
//           className="signin-btn"
//         >
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar px-6 md:px-10">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="w-9 h-9 bg-[#0F2A44] rounded-lg flex items-center justify-center text-white font-bold text-lg">
//           🎓
//         </div>
//         <span className="font-semibold text-[#0F2A44] text-lg">
//           InternX <span className="text-sm text-gray-500">Powered by AI</span>
//         </span>
//       </div>

//       {/* Links */}
//       <div className="hidden md:flex gap-6 text-sm font-medium text-[#0F2A44] nav-links">
//         <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
//         <span onClick={() => navigate("/about")} className="cursor-pointer">About</span>
//         <span className="cursor-pointer">Contact</span>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex items-center gap-4">
//         <button className="text-sm text-[#0F2A44]">🌐 English</button>
//         <button
//           onClick={() => navigate("/auth")}
//           className="signin-btn"
//         >
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar px-6 md:px-10">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white font-bold text-lg">
//           🎓
//         </div>
//         <span className="font-semibold text-white text-lg">
//           InternX <span className="text-sm text-[#F6F5F3]">Powered by AI</span>
//         </span>
//       </div>

//       {/* Links */}
//       <div className="hidden md:flex gap-8 text-sm font-medium nav-links">
//         <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
//         <span onClick={() => navigate("/about")} className="cursor-pointer">About</span>
//         <span className="cursor-pointer">Contact</span>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex items-center gap-4">
//         <button className="text-sm text-white">🌐 English</button>
//         <button
//           onClick={() => navigate("/auth")}
//           className="signin-btn"
//         >
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar flex items-center justify-between px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="w-9 h-9 bg-[#0F2A44] rounded-lg flex items-center justify-center text-white font-bold text-lg">
//           🎓
//         </div>
//         <span className="font-semibold text-[#0F2A44] text-lg">
//           InternX <span className="text-sm text-gray-500">Powered by AI</span>
//         </span>
//       </div>

//       {/* Links */}
//       <div className="hidden md:flex gap-6 text-sm font-medium text-[#0F2A44]">
//         <span onClick={() => navigate("/")} className="hover:text-[#FFA31A] cursor-pointer">Home</span>
//         <span onClick={() => navigate("/about")} className="hover:text-[#FFA31A] cursor-pointer">About</span>
//         <span className="hover:text-[#FFA31A] cursor-pointer">Contact</span>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex items-center gap-4">
//         <button className="text-sm text-[#0F2A44]">🌐 English</button>
//         <button
//           onClick={() => navigate("/auth")}
//           className="bg-[#0F2A44] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition"
//         >
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         InternX <span>Powered by AI</span>
//       </div>

//       <div className="nav-links">
//         <span onClick={() => navigate("/")}>Home</span>
//         <span onClick={() => navigate("/about")}>About</span>
//         <span>Contact</span>
//       </div>

//       <button
//         className="signin-btn"
//         onClick={() => navigate("/auth")}
//       >
//         Sign In
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
