// import React from "react";
// import {render} from "react-dom";
//
// import { User } from './components/User';
// import { Main } from './components/Main';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }
//
//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }
//
// render(<App />, window.document.getElementById('app'));

import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

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
  combineReducers({mathReducer, userReducer}),
  {},
  applyMiddleware(logger()));

store.subscribe(() => {
  // console.log("Store updated!", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "ADD",
  payload: 22
});

store.dispatch({
  type: "SUBTRACT",
  payload: 80
});

store.dispatch({
  type: "SET_AGE",
  payload: 30
});
