import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isLight } = useSelector((state) => ({
    ...state.ThemeReducer,
  }));

  return (
    <div className={`w-full h-screen ${isLight ? "bg-white" : "bg-black"}`}>
      <div className="w-full h-1/4 bg-desktopDarkTheme bg-cover relative">
        <div className="w-1/3 sm:w-2/3 h-64 absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
