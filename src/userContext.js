import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
 const [userName, setUserName] = useState("Hello There!");
 return (
  <UserContext.Provider value={userName}>{children}</UserContext.Provider>
 );
};
