import React, { useRef, useState, useCallback } from "react";
import { useForm } from "./hooks";

import Hello from "./components/Hello";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const inputRef = useRef();
  const [showHello, setShowHello] = useState(true);

  const [count, setCount] = useState(0);

  const favNums = [2, 11, 17];
  const increment = useCallback(n => setCount(count => count + n), [setCount]);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}

      <br />
      <div>{count}</div>
      <label>square components:</label>
      {favNums.map(n => (
        <Square increment={increment} n={n} key={n} />
      ))}
      <br />

      <br />
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        ref={inputRef}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  );
};

export default App;
