import { createContext, useContext, useState } from "react";
import { getStoredRole, setStoredRole } from "@/utility/roleStorage";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  // initialize directly from localStorage
  const [role, setRoleState] = useState(() => getStoredRole());

  const setRole = (newRole) => {
    setRoleState(newRole);
    setStoredRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);