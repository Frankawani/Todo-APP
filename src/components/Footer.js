import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import FilterButtons from "./FilterButtons";

/**
 * Component with active todos counter and filter buttons
 * @returns Html of FOOTER of the component
 */
const Footer = () => {
  const { toDoList } = useSelector((state) => ({
    ...state.ToDoReducer,
  }));

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const categories = ["ALL", "ACTIVE", "COMPLETED"];
  const activeTodos = toDoList.filter((todo) => todo.isCompleted === false);

  const filterList = (e, category) => {
    e.preventDefault();
    dispatch({
      type: category,
    });
  };

  return (
    <footer className="flex flex-col justify-between px-5 text-xs py-3 text-dark-grayish-blue">
      <div className="flex justify-between sm:flex-wrap sm:justify-center">
        <p className="align-self-center basis-1/3 sm:basis-2/4">
          {activeTodos.length} active items left
        </p>
        <div className="sm:hidden">
          <FilterButtons />
        </div>
        <button
          className="sm:basis-2/4 align-self-end basis-1/3 text-right"
          onClick={(e) => filterList(e, "CLEAR_COMPLETED")}
        >
          Clear Completed
        </button>
      </div>
    </footer>
  );
};
export default Footer;
