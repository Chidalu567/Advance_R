//I want to show loading when a data cant be gotten and error when the data is not found and data when it is found
//using short circuit operator

import React from "react";
import { useEffect, useState } from "react";

const UserFetch = () => {
  const [user, setUser] = useState([]); //useState definition

  const url = "https://api.github.com/users/QuincyLarson";
  const getUser = async () => {
    const persons = await fetch(url).then((resp) => {
      return resp.json(); //convert to json\
    });
    setUser(persons.name);
  }; //javascript function definition
  useEffect(() => {
    getUser(); //function call
  }, []); //useEffect hook
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}; //react component definiton

export default UserFetch; //export for external file to use
