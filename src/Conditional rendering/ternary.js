import React from "react";
import { useState, useEffect } from "react";

//show modal on click and remove modal on second click and on

const Modal = () => {
  const [show, setShow] = useState(false); //react hook definition
  //when the state value is true show the call the component

  return (
    <div>
      {/*When button is clicked call the state handler and inverse the value*/}
      <button type="button" onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show ? <Item /> : <h1>Error ...</h1>}
    </div>
  );
}; //react component definiton

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const changesize = () => {
    setSize(window.innerWidth); //state handler call
  };

  useEffect(() => {
    window.addEventListener("resize", changesize);
    return () => {
      window.removeEventListener("resize", changesize);
    };
  });
  return (
    <div>
      <h1>Window size is {size}</h1>
    </div>
  );
}; //react component definition

export default Modal; //export for external file to use
