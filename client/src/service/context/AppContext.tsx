import { createContext, useState, useEffect } from "react";
import type { AppContextType } from "../interfaces";

const AppContext = createContext<AppContextType>({} as AppContextType);

export default AppContext;

export const AppProvider = ({ children }: any) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState(null);

  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      document.location.href = "/auth"
    }
  }, [isAuthenticated]);

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const contextData = {
    user,
    logout,
    setUser,
    authToken,
    setAuthToken,
    isAuthenticated,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
