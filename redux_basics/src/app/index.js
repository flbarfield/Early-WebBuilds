import React from "react";

import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";
// No longer needs curly braces because this is a now a default export
import App from "./container/App";

////////combinded this with mathreducer/////
// const initialState = {
//   result: 1,
//   lastValues: [],
//   username:"Max"
// };

const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
}

const userReducer = (state = {
  name: "Max",
  age: 27
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
}

// calling next here is important, else store will not update
// store = argument and function is taking it as an input
// next = expectation of redux
// action = action is taken and then executed so code will run

const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next(action);
};

// mathReducer: mathReducer (mapping) would actually be the proper way to define
// it here, but es6 only requires it once if the key/values are the same.
const store = createStore(
  combineReducers({mathReducer, user: userReducer}),
  {},
  applyMiddleware(logger()));

store.subscribe(() => {
  // console.log("Store updated!", store.getState());
});

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  window.document.getElementById("app"));
