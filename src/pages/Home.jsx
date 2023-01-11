import React from "react";
import Chat from "../components/Chat";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { chats, sendMessage, getMessages, isLoading } = useHttp();
  const authCtx = useContext(AuthContext);

  const [fetching, setFetching] = useState(false);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    getMessages();

    if (fetching) {
      const timer = setTimeout(() => {
        setFetching(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [fetching]);

  const submitHandler = (event) => {
    event.preventDefault();

    const message = event.target[0].value;
    sendMessage(message);
    setFetching(true);
    setTextValue("");
  };

  const logoutHandler = () => {
    authCtx.handleLogout();
  };

  const content = isLoading ? (
    <p className="bg-red-700 p-4 rounded-lg max-h-96 max-w-6xl mx-auto font-bold text-5xl text-white">
      Loading...
    </p>
  ) : (
    <Chat chats={chats} displayName={authCtx.user.displayName} />
  );

  return (
    <Layout onLogout={logoutHandler}>
      {content}
      <Input
        onSubmit={submitHandler}
        onTextValue={setTextValue}
        textValue={textValue}
      />
    </Layout>
  );
};

export default Home;
