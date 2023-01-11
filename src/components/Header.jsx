import React from "react";

const Header = (props) => {
  return (
    <header className="bg-indigo-600 p-4 h-full w-full flex justify-between items-center">
      <h1 className="text-white text-xl font-medium">Chat App</h1>
      <button
        className={
          props.hidden ? "hidden" : "bg-red-500 text-white p-2 rounded-md"
        }
        onClick={props.onLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
