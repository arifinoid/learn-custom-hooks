import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { UserContext } from "./context/UserContext";
import Home from "./pages/home";
import Memo from "./pages/memo";
import Todo from "./pages/todo";

const App = () => {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <Switch>
        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Home} />
          <Route path="/memo" component={Memo} />
          <Route path="/todo" component={Todo} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
