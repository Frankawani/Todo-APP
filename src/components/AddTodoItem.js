import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AddTodoItem = () => {
  const [todo, setTodo] = useState("");

  const { toDoList, isLight } = useSelector((state) => ({
    ...state.ToDoReducer,
    ...state.ThemeReducer
  }));

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    const item = {
      id: toDoList.length + 1,
      todo: todo,
      status: "active",
    };

    dispatch({
      type: "ADD_TODO",
      payload: item,
    });

    setTodo("");
  };

  return (
    <input
      className={`w-full px-7 py-2 rounded-sm mt-6 focus:outline-none text-very-dark-grayish-blue ${isLight ? "bg-white" : "bg-black"}`}
      type="text"
      placeholder="Create a new todo..."
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && addItem(e)}
    />
  );
};

export default AddTodoItem;
