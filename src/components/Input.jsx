import React from "react";

const Input = (props) => {
  const changeHandler = (event) => {
    const message = event.target.value;
    props.onTextValue(message);
  };
  return (
    <form onSubmit={props.onSubmit} className="max-w-6xl mx-auto">
      <textarea
        onChange={changeHandler}
        className="bg-gray-200 rounded-lg w-full p-2 text-gray-700"
        placeholder="Type your message here"
        value={props.textValue}
      />
      <button className="bg-red-500 text-white rounded-lg p-2">Send</button>
    </form>
  );
};

export default Input;
