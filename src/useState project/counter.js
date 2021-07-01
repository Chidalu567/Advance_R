import React from "react";
import { useState } from "react";

const Modal = () => {
  const [value, setValue] = useState(0); //useState definition with inital state value

  const ComIn = () => {
    setTimeout(() => {
      setValue((previousVal) => previousVal + 1); //state handelr call
    }, 2000); //run the block of code after 2 secs
  };

  return (
    <div>
      <h1>Current Value is {value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setValue(0)}>
        Reset
      </button>
      <button type="button" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button type="button" onClick={ComIn}>
        Complex increase
      </button>
    </div>
  );
}; //javascript component definition

export default Modal;
