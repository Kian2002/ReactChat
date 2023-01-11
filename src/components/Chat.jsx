import React from "react";

const Chat = (props) => {
  return (
    <div className="bg-indigo-600 p-4 rounded-lg overflow-y-scroll max-h-96 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2">
        {props.chats.map((chat) => {
          const isSelfMessage = chat.displayName === props.displayName;
          return (
            <div
              key={chat.id}
              className={`bg-red-500 text-white md:max-w-screen-md sm:max-w-screen-sm p-2 rounded-lg ${
                isSelfMessage ? "self-end" : "self-start"
              } flex items-center`}
            >
              <div className="flex flex-col p-2 max-w-sm">
                <p className="text-xs font-small">{chat.displayName}</p>
                <p>{chat.message}</p>
              </div>
              <img
                className="h-12 w-12 rounded-full object-cover mr-4"
                src={chat.imageURL}
                alt={chat.displayName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
