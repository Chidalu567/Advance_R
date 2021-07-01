import React from "react";
import { useState, useEffect } from "react";

const Login_Form = () => {
  //This state value will hold the user firstname and email and we will use it to create a new data
  const [person, setPerson] = useState({ firstname: "", email: "" }); //useState definiton
  const [humans, setHumans] = useState([]); //useState definition
  //update the state value
  const handleChange = (e) => {
    const name = e.target.name; //target the element with id of user_name
    const value = e.target.value; //target the element with is of user_email
    //dynamic object property
    setPerson({ ...person, [name]: value }); //update the state value
  }; //javascript function definition
  const submit = (e) => {
    e.preventDefault(); //avoid from refreshing
    const data = { id: new Date().getTime().toString(), ...person }; //object definition
    setHumans([...humans, data]);
    setPerson({ firstname: "", email: "" }); //state handler call
  }; //javascript function definition
  return (
    <div>
      <form method="post">
        <input
          type="text"
          id="user_name"
          name="firstname"
          value={person.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          id="user_email"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
      {humans.map((human) => {
        return (
          <div key={human.id}>
            <h3>{human.firstname}</h3>
            <h4>{human.email}</h4>
          </div>
        );
      })}
    </div>
  );
}; //react component definition

export default Login_Form; //export for external file to use
