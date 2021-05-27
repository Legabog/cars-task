import { createStore, combineReducers, applyMiddleware } from "redux";
// Reducers
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
  appReducer,
});

let store = createStore(rootReducer, applyMiddleware());

window.store = store;

export default store;