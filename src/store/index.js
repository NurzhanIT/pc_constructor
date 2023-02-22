import { configureStore } from "@reduxjs/toolkit";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({});

export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk))
);
