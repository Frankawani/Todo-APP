import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
  const { toDoList } = useSelector((state) => ({
    ...state.ToDoReducer,
  }));

  const categories = ['ALL', 'ACTIVE', 'COMPLETED', 'CLEAR_COMPLETED'];

  const dispatch = useDispatch();
  const activeTodos = toDoList.filter(todo => todo.isCompleted === false);
  
  const filterList = (e, category) => {
    e.preventDefault()
    dispatch({
      type:category
    });
  }

  return (
    <footer className="flex justify-between px-5 text-xs py-3 text-dark-grayish-blue">
      <p>{activeTodos.length} active items left</p>
      <div className="flex gap-2">
         {categories.map((btn, index) => {
          return <button 
          onClick={(e) => filterList(e, btn)}
          key={index} 
          className="capitalize last-of-type:ml-12">
            {btn.replace('_', ' ').toLowerCase()}
          </button>
        })}
      </div>
    </footer>
  );
};
export default Footer;



