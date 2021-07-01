import React from "react";
import { useState } from "react";

const Modal = () => {
  //define my useState
  const [people, setPeople] = useState({
    id: 1,
    name: "fortune",
    age: 14,
    class: "year 11",
  });
  const showPrompt = (param) => {
    const user_name = prompt("What is your new name");
    setPeople({ ...people, name: user_name });
  }; //javascript function definition
  return (
    <div key={people.id}>
      <h2>{people.name}</h2>
      <h3>{people.class}</h3>
      <button type="button" onClick={() => showPrompt()}>
        Change name
      </button>
    </div>
  );
};

export default Modal;
