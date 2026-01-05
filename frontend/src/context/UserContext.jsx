import { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// This component will wrap our app
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    education: "",
    skills: [],
    interests: [],
    location: ""
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Easy way to use context in any page
export const useUser = () => useContext(UserContext);
