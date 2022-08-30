import React, { useState } from "react";
import checkedIcon from "../assets/images/icon-check.svg";
import crossIcon from "../assets/images/icon-cross.svg";
import { useSelector, useDispatch } from "react-redux";

const TodoItem = ({ id, todo, isCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => ({
    ...state.ThemeReducer
  }));

  const toggleChecked = () => {
    setIsChecked(!isChecked);
    dispatch({
      type: "CHECK_TODO",
      payload: {
        id: id,
        isCompleted: isChecked,
      },
    });
  };

  const removeTodo = () => {
    dispatch({
        type: "REMOVE_TODO",
        payload: {
          id: id
        },
      });
  }

  return (
    <div className="flex px-6 py-4 justify-between align-center">
      <div className="flex">
        <div
          onClick={() => toggleChecked()}
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
    </div>
  );
};

export default TodoItem;
