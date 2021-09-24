import { createStore, applyMiddleware } from "redux";
// redux-thunk: allows to write action creators that return a function instead of an action.
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const initialState = {};

const middleWare = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);
