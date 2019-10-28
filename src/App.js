import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Memo from "./pages/memo";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/memo" component={Memo} />
      </Switch>
    </Router>
  );
};

export default App;
