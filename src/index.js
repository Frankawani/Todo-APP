import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ThemeReducer from "./Reducers/ThemeReducer";
import ToDoReducer from "./Reducers/ToDoReducer";

const rootReducer = combineReducers({
  ThemeReducer,
  ToDoReducer
})

const Store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
