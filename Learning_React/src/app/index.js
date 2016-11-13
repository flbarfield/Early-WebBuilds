import React from "react";
import {render} from "react-dom";
//Browser history tells your app how to handle links so 
//it doesn't have to ping the server. Keeps everything
//within the current app. Also makes for beautiful
// localhost.com/urls instead of localhost.com/#/urls

//editing package.json with --history-api-fallback makes 404s
//fall back to the index page, so the frontend can handle the 
// .com/url style of url

import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";


class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={Root}>
					<IndexRoute component={Home}/>
					<Route path={"user"} component={User}/>
					<Route path={"home"} component={Home}/>
				</Route>
				<Route path={"home"} component={Home}/>
			</Router>
		);
	}
}

render(<App/>, window.document.getElementById("app"));