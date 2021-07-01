import React from "react";
import { useState, useReducer, useEffect } from "react";
import Modal from "./modals/modal";

const Main = () => {
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "user",
  };

  const main = (state, action) => {
    if (action.type === "add_user") {
      const data = [...state.people, action.payload];
      return {
        ...state,
        people: data,
        isModalOpen: true,
        modalContent: "New User added",
      };
    }
    if (action.type === "remove") {
      const data = state.people.filter((pers) => pers.id !== action.payload);
      return {
        ...state,
        people: data,
        isModalOpen: true,
        modalContent: "User removed",
      };
    }
    if (action.type === "close_modal") {
      return { ...state, isModalOpen: false };
    }
  };

  const [person, setPerson] = useState({ firstname: "" }); //useState definiton
  const [state, dispatch] = useReducer(main, defaultState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "close_modal" });
    }, 3000);
  }, [main]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name) {
      setPerson({ ...person, [name]: value });
    }
  }; //javascript function definiton

  const handleSubmit = (e) => {
    // e.preventDefault(); //avoid refresh

    if (person) {
      const newItem = { id: new Date().getTime().toString(), ...person };
      dispatch({ type: "add_user", payload: newItem }); //statehandelr call
    } else {
      dispatch({ type: "no_value" });
    }
  }; //javascript function definition

  return (
    <div>
      {state.isModalOpen && <Modal content={state.modalContent} />}
      <form>
        <input
          type="text"
          name="firstname"
          value={person.firstname}
          onChange={handleChange}
        />
        <button type="button" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
      {state.people.map((pers) => {
        return (
          <section key={pers.id}>
            <h1>{pers.firstname}</h1>
            <button
              type="button"
              onClick={() => dispatch({ type: "remove", payload: pers.id })}
            >
              remove
            </button>
          </section>
        );
      })}
    </div>
  );
}; //react component definition

export default Main; //export for external file to use
