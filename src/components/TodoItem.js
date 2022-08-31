import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import checkedIcon from "../assets/images/icon-check.svg";
import crossIcon from "../assets/images/icon-cross.svg";

/**
 * A single todo item in the list
 * @param {id, todo, isCompleted} - a properties of a single item
 * @returns HTML div element
 */
const TodoItem = ({ id, todo, isCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => ({
    ...state.ThemeReducer,
  }));

  /**
   * Toggle isChecked state of the item in order to use different styles
   */
  const toggleChecked = () => {
    setIsChecked((prevValue) => {
      return !prevValue;
    });
  };
  /**
   * Toggle isCompleted status of the item
   */
  const changeStatus = () => {
    dispatch({
      type: "CHECK_TODO",
      payload: {
        id: id,
        isCompleted: isChecked,
      },
    });
  };

  /**
   * Change style and item isCompleted state in the list
   */
  const todoAction = () => {
    toggleChecked();
    changeStatus();
  };

  /**
   * Remove todo item fron the list
   */
  const removeTodo = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: id,
      },
    });
  };

  return (
    <article className="flex px-6 py-4 justify-between align-center">
      <div className="flex">
        <div
          onClick={() => todoAction()}
          className={`h-6 w-6 rounded-full bg-grey place-items-center hover:bg-gradient-to-r from-first to-second flex justify-center align-center p-[1px] ${
            isChecked && "bg-gradient-to-r"
          }`}
        >
          {isChecked ? (
            <img src={checkedIcon} alt="check icon" className="w-3 h-3 block" />
          ) : (
            <div
              className={`h-full w-full ${
                isLight ? "bg-white" : "bg-very-dark-desaturated-blue"
              } rounded-full`}
            ></div>
          )}
        </div>
        <p
          className={`capitalize pl-3 text-sm place-self-center ${
            isChecked && "text-dark-grayish-blue line-through"
          }
          ${isLight ? "text-black opacity-60" : "text-light-grayish-blue"}
        `}
        >
          {todo}
        </p>
      </div>
      <button className="justify-self-end" onClick={() => removeTodo()}>
        <img src={crossIcon} alt="cross icon" />
      </button>
    </article>
  );
};

export default TodoItem;
