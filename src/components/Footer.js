import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
  const { toDoList } = useSelector((state) => ({
    ...state.ToDoReducer,
  }));
  const [value, setValue] = useState(0);

  const categories = ['ALL', 'ACTIVE', 'COMPLETED', 'CLEAR_COMPLETED'];

  const dispatch = useDispatch();
  const activeTodos = toDoList.filter(todo => todo.isCompleted === false);

  const filterList = (e, category, index) => {
    e.preventDefault()
    dispatch({
      type:category
    });
    setValue(index);
  }

  return (
    <footer className="flex flex-col text-cenetr justify-between px-5 text-xs py-3 text-dark-grayish-blue">
      <div className="flex gap-2">
      <p className="align-self-center">{activeTodos.length} active items left</p>
         {categories.map((btn, index) => {
          return <button 
          onClick={(e) => filterList(e, btn, index)}
          key={index} 
          className={`capitalize last-of-type:ml-12 ${value === index ? "border-b-2 border-sky-500 " : ""}`}>
            {btn.replace('_', ' ').toLowerCase()}
          </button>
        })}
      </div>
    </footer>
  );
};
export default Footer;



