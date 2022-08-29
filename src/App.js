import { useSelector } from "react-redux";

import Header from "./components/Header";
import AddTodoItem from "./components/AddTodoItem";

function App() {
  
  const { isLight } = useSelector((state) => ({
    ...state.ThemeReducer,
  }));

  return (
    <div className={`w-full h-screen ${isLight ? "bg-white" : "bg-black"} font-josefin`}>
      <div className="w-full h-64 bg-desktopDarkTheme bg-cover relative">
        <div className="w-1/3 sm:w-2/3 h-64 absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Header />
          <AddTodoItem/>
        </div>
      </div>
    </div>
  );
}

export default App;
