import { useSelector } from "react-redux";

import Header from "./components/Header";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
function App() {
  const { toDoList,  isLight } = useSelector((state) => ({
    ...state.ToDoReducer,
    ...state.ThemeReducer,
  }));

  return (
    <div
      className={`w-full min-h-screen max-h-fit bg-scroll font-josefin ${
        isLight ? "bg-light-grey" : "bg-very-dark-blue"
      }`}
    >
      <div
        className={` ${isLight ? "bg-desktopLightTheme" : "bg-desktopDarkTheme"}
        w-full bg-[length:100%_13rem] bg-no-repeat relative flex justify-center`}
      >
        <div className="w-3/5 md:w-3/5 sm:w-2/3 h-fit mt-16 mb-4 max-w-md">
          <Header />
          <AddTodoItem />
          <TodoList />

          { toDoList.length > 0 &&
          <div className={`min-sm:hidden sm:flex w-full justify-around bg-white px-5 text-xs py-1 text-dark-grayish-blue
          ${isLight
            ? "bg-white"
            : "bg-very-dark-desaturated-blue divide-slate-700"
        } mt-4 rounded-sm shadow-lg
          `}>
            <FilterButtons/>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
