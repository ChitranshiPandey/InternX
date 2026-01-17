import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

import Home from "./Component/Home";
import About from "./Component/About";
import Profile from "./Component/Profile";
import Education from "./Component/Education";
import Results from "./Component/Results";
import Skills from "./Component/Skills";
import Interests from "./Component/Interests";
import Location from "./Component/Location";
import Signup from "./Component/Signup";
import AuthPage from "./Component/Auth/AuthPage";
import Placements from "./Component/Placements";
import Dashboard from "./Component/Dashboard"; // <-- import dashboard
import Chat from "./Component/Assistant/Chat";
import Resume from "./Component/Resume";

import ChatButton from "./Component/Assistant/ChatButton"; // ✅ ADD THIS
import Campus from "./Component/Campus";
import OffCampus from "./Component/OffCampus";
import Internship from "./Component/Internship";
import Startup from "./Component/Startup";

function App() {
  return (
    <>
      <Navbar /> {/* Always visible top nav */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/onboarding/education" element={<Education />} />
        <Route path="/results" element={<Results />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/location" element={<Location />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="/chat" element={<Chat />} />

        <Route path="/placements" element={<Placements />} />
        <Route path="/placements/campus" element={<Campus />} />
        <Route path="/placements/off-campus" element={<OffCampus />} />
        <Route path="/placements/internship" element={<Internship />} />
        <Route path="/placements/startup" element={<Startup />} />

        <Route path="/resume" element={<Resume />} />


          


      </Routes>
      <ChatButton /> {/* ✅ ADD THIS */}
    </>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Component/Navbar";

// import Home from "./Component/Home";
// import About from "./Component/About";
// import Profile from "./Component/Profile";
// import Education from "./Component/Education";
// import Results from "./Component/Results";
// import Skills from "./Component/Skills";
// import Interests from "./Component/Interests";
// import Location from "./Component/Location";
// import Signup from "./Component/Signup";
// import AuthPage from "./Component/Auth/AuthPage";

// function App() {
//   return (

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/onboarding/education" element={<Education />} />
//       <Route path="/results" element={<Results />} />
//       <Route path="/skills" element={<Skills />} />
//       <Route path="/interests" element={<Interests />} />
//       <Route path="/location" element={<Location />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/auth" element={<AuthPage />} />

//     </Routes>

//   );
// }

// export default App;
