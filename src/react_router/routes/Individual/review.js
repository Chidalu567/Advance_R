import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//gets the dnamuc property id
//search fr user that matches this
//saves to a statevalue
//renders in page
const Review = () => {
  const data = [
    { id: 1, firstname: "fortune oke" },
    { id: 2, firstname: "Ebuka" },
  ];
  const [name, setName] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const user = data.find((dats) => dats.id === parseInt(id));
    console.log(user);
    setName(user.firstname);
  }, [id]);
  return (
    <React.Fragment>
      <h1>{name}</h1>
    </React.Fragment>
  );
}; //react component definition

export default Review; //export for external file to use
