import React from "react";
import Header from "./header";
import Body from "./body";
import FootMusicBar from "./FootMusicBar";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import SongList from "./SongList";

// route path needs to be "/"" for local
// songs for local

// for live, "/Past_Projects/Band_stream/dist/index.html" for header
// "/Past_Projects/Band_stream/dist/index.html/songs" for SL

export default class Layout extends React.Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path={"/Past_Projects/Band_stream/dist/index.html"} component={Header}>
          <IndexRoute component={Body}/>
          <Route path={"/Past_Projects/Band_stream/dist/index.html/foot-mu"} component={FootMusicBar}/>
          <Route path={"/Past_Projects/Band_stream/dist/index.html/songs"} component={SongList}/>
        </Route>
      </Router>
    );
  }
}
