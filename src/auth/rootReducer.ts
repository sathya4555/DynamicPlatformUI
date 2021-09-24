import { combineReducers } from "redux";
// import { sidebarReducer } from "./sidebar/reducers";
import { authReducer } from "./reducers";

export const rootReducer = combineReducers({
  // menu: sidebarReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
