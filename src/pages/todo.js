import React, { useReducer, useState, useContext } from "react";

import Nav from "../components/Nav";

import { UserContext } from "../context/UserContext";
import { login } from "../utils/login";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todosCount: state.todosCount + 1
      };
    case "TOGGLE-TODO":
      return {
        todos: state.todos.map((todo, i) =>
          i === action.i ? { ...todo, completed: !todo.completed } : todo
        ),
        todosCount: state.todosCount
      };
    default:
      return state;
  }
};

const Todo = () => {
  const [{ todos, todosCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todosCount: 0
  });
  const [text, setText] = useState();

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Nav />
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD-TODO", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>

      <p>total todo(s): {todosCount}</p>
      {todos.map((todo, i) => {
        return (
          <div
            key={i}
            onClick={() => dispatch({ type: "TOGGLE-TODO", i })}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
          </div>
        );
      })}

      <pre>{JSON.stringify(user, null, 2)}</pre>

      {user ? (
        <button onClick={() => setUser(null)}>logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default Todo;
