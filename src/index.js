import React from "react";
import ReactDom from "react-dom";
import Main from "./react_router/Main";

const Page = () => {
  return (
    <React.Fragment>
      <Main /> {/*React component call*/}
    </React.Fragment>
  );
}; //componet dfinition

ReactDom.render(<Page />, document.getElementById("root")); //render component to the element with id of root
