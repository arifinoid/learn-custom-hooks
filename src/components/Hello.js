import React, { useRef, useState, useEffect } from "react";

import { useFetch, useMeasure } from "../hooks";

const Hello = ({ increment }) => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data } = useFetch(`http://numbersapi.com/${count}/math`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const divRef = useRef();
  const rect = useMeasure(divRef, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>

      <pre>{JSON.stringify(rect, null, 2)}</pre>

      <div>count: {count}</div>
      <button onClick={() => setCount(count => count + 1)}>increment</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default Hello;
