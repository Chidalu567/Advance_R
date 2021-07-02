import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//all routes
import Home from "./routes/Home";
import People from "./routes/People";
import About from "./routes/About";
import Navbar from "./component/Navbar";
import Review from "./routes/Individual/review";
import Error from "./routes/Error";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/person/:id" children={<Review />}></Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}; //react component definition

export default Main; //export for external file to use
