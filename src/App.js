import { useSelector } from "react-redux";

import Header from "./components/Header";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
function App() {
  const { isLight } = useSelector((state) => ({
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
        <div className="w-1/3 md:w-3/5 sm:w-2/3 h-fit mt-16 mb-4">
          <Header />
          <AddTodoItem />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
