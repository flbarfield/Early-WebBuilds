import allReducers from "../reducers/reIndex";
import {createStore} from "redux";
import MainPage from "./MainPage.js";
import Nav from "./Navbar";
import {Provider} from "react-redux";
import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";


const store = createStore(allReducers);

const Layout = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={"/"} component={Nav}>
        <IndexRoute component={MainPage}/>
      </Route>
    </Router>
  </Provider>
);

export default Layout;
