import React from "react";
import { useContext } from "react";

const UserContext = React.createContext(); //create a contextapi

const Main = () => {
  const name = "chidalu";

  return (
    <UserContext.Provider value={{ name }}>
      <div>
        <Submain /> {/*React component call*/}
      </div>
    </UserContext.Provider>
  );
}; //react component defintion

const Submain = () => {
  const { name } = useContext(UserContext); //use the context api
  return (
    <div>
      <h1>{name}</h1>
      {/* <Subsubmain/> React component call */}
    </div>
  );
}; //react component definition

// const Subsubmain = () => {}; //react component definition

export default Main; //export for external file to use
