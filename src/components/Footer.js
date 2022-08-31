import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
    <footer className="flex flex-col text-cenetr justify-between px-5 text-xs py-3 text-dark-grayish-blue">
      <div className="flex justify-between">
        <p className="align-self-center">
          {activeTodos.length} active items left
        </p>
        <div className="ml-6">
          {categories.map((btn, index) => {
            return (
              <button
                onClick={(e) => {
                  filterList(e, btn, index);
                  setValue(index);
                }}
                key={index}
                className={`capitalize mr-6 pb-1 ${
                  value === index && "border-b-2 border-primary "
                }`}
              >
                {btn.replace("_", " ").toLowerCase()}
              </button>
            );
          })}
        </div>
        <button onClick={(e) => filterList(e, "CLEAR_COMPLETED")}>
          Clear Completed
        </button>
      </div>
    </footer>
  );
};
export default Footer;
