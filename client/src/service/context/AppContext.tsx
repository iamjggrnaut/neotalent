import { createContext, useEffect, useState } from "react";
import type { AppContextType } from "../interfaces";

const AppContext = createContext<AppContextType>({} as AppContextType);

export default AppContext;

export const AppProvider = ({ children }: any) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState(null);


  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const storedUser = localStorage.getItem('token') 
  useEffect(() => {
    const timeout = setTimeout(() => {
      if(storedUser){
        document.location.href = '/summarize'
      }
    }, 200);
    return clearTimeout(timeout)
  }, [storedUser])
  

  const contextData = {
    user,
    logout,
    setUser,
    authToken,
    setAuthToken,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
