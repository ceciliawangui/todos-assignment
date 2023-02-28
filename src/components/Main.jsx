import React, { useState } from "react";
import "./Main.css";
import { FaTrash, FaEdit } from "react-icons/fa";

function Main() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "This is the first todo item.",
    },
    {
      id: 2,
      title: "Todo 2",
      description: "This is the second todo item.",
    },
  ]);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (id, title, description) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, description };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="Main">
      {todos.map((todo) => (
        <div className="Todo" key={todo.id}>
          <div className="Title">{todo.title}</div>
          <div className="Description">{todo.description}</div>
          <div className="Icons">
            <FaTrash
              className="Icon"
              onClick={() => handleDelete(todo.id)}
            />
            <FaEdit
              className="Icon"
              onClick={() =>
                handleEdit(todo.id, "New Title", "New Description")
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Main;