import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Home from "../components/Home.js";
import User from "./User.js";

export default class Layout extends React.Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Home}/>
        <Route path={"/shop"} component={User}/>
      </Router>
    );
  }
}
