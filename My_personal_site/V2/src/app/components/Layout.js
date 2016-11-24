import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Nav from "./Navbar";
import MainPage from "./MainPage.js";

export default class Layout extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={Nav}>
          <IndexRoute component={MainPage}/>
        </Route>
      </Router>
    );
  }
}
