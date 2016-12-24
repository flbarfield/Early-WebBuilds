import DotsAndBox from "./DotsAndBox";
import DotsPlay from "./DotsAndBox/DotsPlay";
import Machine from "./TicTac/Machine";
import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Root from "../containers/Root";
import TicTac from "../components/TicTac";
import TwoP from "./TicTac/TwoP";

export default class Layout extends React.Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}/>
        <Route path={"/ticTacToe"} component={TicTac}/>
        <Route path={"/machine"} component={Machine}/>
        <Route path={"/twoplayers"} component={TwoP}/>
        <Route path={"/dotsAndBox"} component={DotsAndBox}>
          <Route path={"/DotsPlay"} component={DotsPlay}/>
        </Route>
      </Router>
    );
  }
}
