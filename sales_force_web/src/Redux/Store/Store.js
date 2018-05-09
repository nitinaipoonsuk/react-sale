import { createStore, applyMiddleware } from "redux";
import Thunk from 'redux-thunk' 
import reducers from "../Reducers";

const mylogger = store => next => action => {
  console.log("Log Action: ", action);
  next(action);
};

const middleware = applyMiddleware(mylogger, Thunk);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store: ", store.getState());
});

export default store;
