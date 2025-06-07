import React, { createContext, useContext, useState } from "react";

// 1. Create context
const UserContext = createContext();

// 2. Create custom hook to use context
export const useUser = () => {
  return useContext(UserContext);
};

// 3. Create provider
const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
