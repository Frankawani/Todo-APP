import React, { useState } from "react";
import checkedIcon from "../assets/images/icon-check.svg";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, todo, isCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const dispatch = useDispatch();

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
  return (
    <div className="flex px-6 py-4">
      <div
        onClick={() => toggleChecked()}
        className={`place-items-center h-6 w-6 rounded-full bg-grey hover:bg-gradient-to-r from-first to-second flex justify-center align-center p-[1px] ${
          isChecked && "bg-gradient-to-r"
        }`}
      >
        {isChecked ? (
          <img src={checkedIcon} alt="check icon" className="w-3 h-3 block" />
        ) : (
          <div className="h-full w-full bg-white rounded-full"></div>
        )}
      </div>
      <p
        className={`pl-6 capitalize ${
          isChecked && "text-dark-grayish-blue line-through"
        }`}
      >
        {todo}
      </p>
    </div>
  );
};

export default TodoItem;
