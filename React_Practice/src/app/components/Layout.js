import React from "react";
import Header from "./header";
import Body from "./body";
import FootMusicBar from "./FootMusicBar";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import SongList from "./SongList";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to Musicitude.",
  };
}

  changeTitle(title) {
    this.setState({title});
  }
//// code previously in return ////
// <div>
//   <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
//   <Body/>
// </div>
  render() {

    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Header}>
          <IndexRoute component={Body}/>
          <Route path={"songs"} component={SongList}/>
        </Route>
      </Router>
    );
  }
}
