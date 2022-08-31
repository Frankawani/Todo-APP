import React from "react";
import { useSelector, useDispatch } from "react-redux";

import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";

/**
 * Header with heading and toggle dark/light mode button
 * @returns HTML element
 */
const Header = () => {
  
  const { isLight } = useSelector((state) => ({
    ...state.ThemeReducer,
  }));
  
  const dispatch = useDispatch();

  /**
   * Toggle theme
   */
  const changeTheme = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <div className="flex justify-between align-center">
      <h1 className="text-white font-bold text-2xl tracking-[.55em]">TODO</h1>
      <button onClick={changeTheme}>
        <img src={isLight ? iconSun : iconMoon} alt="icon" />
      </button>
    </div>
  );
};

export default Header;
