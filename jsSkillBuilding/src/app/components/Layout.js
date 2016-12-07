import Machine from "./Machine.js";
import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Root from "../containers/Root.js";
import TicTac from "../components/TicTac.js";
import TwoP from "./TwoP.js";

export default class Layout extends React.Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}/>
        <Route path={"/ticTacToe"} component={TicTac}/>
        <Route path={"/machine"} component={Machine}/>
        <Route path={"/twoplayers"} component={TwoP}/>
      </Router>
    );
  }
}
