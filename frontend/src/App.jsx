import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Profile from "./Component/Profile";
import Education from "./Component/Education";
import Results from "./Component/Results";
import Skills from "./Component/Skills";
import Interests from "./Component/Interests";
import Location from "./Component/Location";
import Signup from "./Component/Signup";






function App() {
  return (
    
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

      


    </Routes>
 
  );
}

export default App;




