import React from "react";
import { useState } from "react";

const Modal = () => {
  const [text, setText] = useState("New user");

  const change = (param) => {
    if (text == "New user") {
      setText("Welcome user"); //state handler call
    } else {
      setText("New user"); //state handler call
    }
  };

  return (
    <div>
      <h2>{text}</h2>
      <button
        type="button"
        onClick={() =>
          setText(text == "New user" ? "Welcome user" : "New user")
        }
      >
        Click me
      </button>
    </div>
  );
}; //react component definition

export default Modal;
