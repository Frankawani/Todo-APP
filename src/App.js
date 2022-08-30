import { useSelector } from "react-redux";

import Header from "./components/Header";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";

function App() {
  const { isLight } = useSelector((state) => ({
    ...state.ThemeReducer,
  }));

  return (
    <div
      className={`w-full h-screen ${
        isLight ? "bg-light-grey" : "bg-very-dark-blue"
      } font-josefin`}
    >
      <div className="w-full h-64 bg-desktopDarkTheme bg-cover relative flex justify-center">
        <div className="w-1/3 md:w-3/5 sm:w-2/3 h-64 mt-16">
          <Header />
          <AddTodoItem />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
