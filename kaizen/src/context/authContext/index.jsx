import { children, createContext, useState } from "react";

export const AuthContext = createContext();

import React from "react";

const AuthContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(Boolean(localStorage.getItem("token")));

  const logut = () => {
    setLogin(false);
    localStorage.removeItem("token");
  };
  const login = (token) => {

    setLogin(true)
    localStorage.setItem("token",token)
  }
  return (
    <AuthContext.Provider
      value={{
        login,
        logut,
        isLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
