import "./App.css";
import iconSun from './assets/images/icon-sun.svg'
function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/4 bg-desktopDarkTheme bg-cover relative">
        <div className="w-1/3 sm:w-2/3 h-64 absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between align-center">
            <h1 className="text-white font-bold text-2xl tracking-[.55em]">TODO</h1>
            <button><img src={iconSun} alt="icon sun"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
