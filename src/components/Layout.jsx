/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="min-h-screen w-auto">
      <nav className="bg-gray-800">
        <div className="flex justify-between h-full w-full">
          <Header onLogout={props.onLogout} hidden={props.noLogout} />
        </div>
      </nav>
      <main className="px-4 py-8">{props.children}</main>
    </div>
  );
};

export default Layout;
