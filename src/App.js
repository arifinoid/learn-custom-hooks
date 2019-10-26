import React, { useState, useEffect } from "react";
import { useForm, useFetch } from "./hooks";

import "./App.css";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data } = useFetch(`http://numbersapi.com/${count}/math`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>

      <br />
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      <div>count: {count}</div>
      <button onClick={() => setCount(count => count + 1)}>increment</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default App;
