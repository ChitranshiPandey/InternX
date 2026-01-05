import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";
import Location from "./Location";
import Results from "./Results";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Profile = () => {
  // This is the main state that stores the user profile
  const [profile, setProfile] = useState({
    education: "",
    skills: [],
    interests: [],
    location: "",
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/education"
          element={<Education profile={profile} setProfile={setProfile} />}
        />
        <Route
          path="/skills"
          element={<Skills profile={profile} setProfile={setProfile} />}
        />
        <Route
          path="/interests"
          element={<Interests profile={profile} setProfile={setProfile} />}
        />
        <Route
          path="/location"
          element={<Location profile={profile} setProfile={setProfile} />}
        />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default Profile;
