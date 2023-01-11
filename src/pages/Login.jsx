import React from "react";
import Layout from "../components/Layout";
import LoginButton from "../components/LoginButton";

const Login = () => {
  const noLogout = true;
  return (
    <Layout noLogout={noLogout}>
      <LoginButton />;
    </Layout>
  );
};

export default Login;
