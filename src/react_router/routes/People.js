import React from "react";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

//component to render all persons we have in our data with their further reviews
const People = () => {
  const defaultState = {
    people: [
      { id: 1, firstname: "fortune oke" },
      { id: 2, firstname: "Ebuka" },
    ],
  };

  const reducer = (state, action) => {
    if (action.type === "add_user") {
      const new_people = [...state.people, action.payload];
      return { ...state, people: new_people };
    }
  };

  const [user, setUser] = useState({ firstname: "" });
  const [state, dispatch] = useReducer(reducer, defaultState);

  //handles the input change in input box and update the state value "user"
  const handleChange = (e) => {
    //we get the name and value of input box
    const name = e.target.name;
    const value = e.target.value;
    if (name) {
      setUser({ ...user, [name]: value }); //state handler call
    }
  };

  //handles the submit and call the dispatch passing the user to it as payload
  const handleSubmit = (e) => {
    if (user) {
      const mod_user = {
        id: new Date().getTime().toString(),
        ...user,
      };
      dispatch({ type: "add_user", payload: mod_user });
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={user.firstname}
          name="firstname"
          onChange={handleChange}
        />
        <button type="button" onClick={() => handleSubmit()}>
          add person
        </button>
      </form>
      {state.people.map((pers) => {
        return (
          <div key={pers.id}>
            <h1>{pers.firstname}</h1>
            <p>
              <Link to={`/person/${pers.id}`}>More about {pers.firstname}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}; //react component definition

export default People; //export for external file to use
