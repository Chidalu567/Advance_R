import React from "react";
import { useEffect, useState } from "react";

const Modal = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((prevsValue) => prevsValue + 1); //state handler call
  }; //javascript function definition
  useEffect(() => {
    document.title = `New message ${value + 1}`; //update or change the title
    window.addEventListener("load", increment);
    return () => {
      window.removeEventListener("load", increment);
    }; //clean up function
  }, [value]); //useEffect call using dependency array anytime the value is rendered
  return <div></div>;
}; //react component definition

export default Modal;
