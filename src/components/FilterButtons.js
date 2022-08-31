import React, { useState } from "react";
import { useDispatch } from "react-redux";

/**
 * Buttons for filtering the todo list
 * @returns HTML element with filter buttons
 */
const FilterButtons = () => {

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const categories = ["ALL", "ACTIVE", "COMPLETED"];

  /**
   * 
   * @param {Event} e 
   * @param {String} category for filtering the items
   */
  const filterList = (e, category) => {
    e.preventDefault();
    dispatch({
      type: category,
    });
  };
  return (
    <div className={`ml-6 flex min-sm:basis-1/3 sm:order-last sm:w-full sm:justify-around sm:my-2 sm:ml-0`}>
      {categories.map((btn, index) => {
        return (
          <button
            onClick={(e) => {
              filterList(e, btn, index);
              setValue(index);
            }}
            key={index}
            className={`capitalize mr-6  ${
              value === index && "text-primary"
            }`}
          >
            {btn.replace("_", " ").toLowerCase()}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
