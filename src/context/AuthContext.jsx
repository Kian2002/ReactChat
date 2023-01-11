import React, { createContext, useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    if (userLocal) {
      setIsAuthenticated(true);
      setUser(userLocal);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setIsAuthenticated(true);

        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(() => {
          localStorage.removeItem("user");
          setIsAuthenticated(false);
        }, 300000);
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        user,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
