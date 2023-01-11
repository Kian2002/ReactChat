import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginButton = () => {
  const authCtx = React.useContext(AuthContext);

  if (authCtx.isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex items-center justify-center h-96">
      <button
        className="card bg-indigo-600 text-center w-96"
        onClick={authCtx.handleLogin}
      >
        <span className="icon align-middle rounded-full shadow-2xl"></span>
        <span className="text-xl text-white align-middle inline-block px-28">
          Login
        </span>
      </button>
    </div>
  );
};

export default LoginButton;
