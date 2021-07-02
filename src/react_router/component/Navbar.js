import React from "react";
import { Link } from "react-router-dom";

//component to render link that routes to pages
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/people">People</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}; //react component definition

export default Navbar;
