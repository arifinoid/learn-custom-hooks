import React, { useState } from "react";

const [{ count, count2 }, setCount] = useState({ count: 0, count2: 10 });

const Counter = () => (
  <div>
    <button
      onClick={() =>
        setCount(currentState => ({
          ...currentState,
          count: currentState.count + 1
        }))
      }
    >
      +
    </button>
    <div>count 1: {count}</div>
    <div>count 2: {count2}</div>
  </div>
);

export default Counter;
