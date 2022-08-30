import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { toDoList, isLight } = useSelector((state) => ({
    ...state.ToDoReducer,
    ...state.ThemeReducer,
  }));

  if (toDoList.length === 0) {
    return <h1 className="text-light-grey mt-5">List is empty</h1>;
  }

  return (
    <div
      className={`h-fit ${isLight ? "bg-white" : "bg-black"} mt-8 rounded-sm shadow-lg`}
    >
      {toDoList
        .map((item) => {
          return <TodoItem key={item.id} {...item} />;
        })
        .reverse()}
    </div>
  );
};

export default TodoList;
