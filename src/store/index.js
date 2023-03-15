import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";
import { componentsReducer } from "./itemsReducer";
import { newsReducer } from "./newsReducer";
const rootReducer = combineReducers({
  components: componentsReducer,
  user: userReducer,
  news: newsReducer,
});

export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk))
);
