import AboutBand from '../components/AboutPages/AboutBand.js';
import AboutBlog from '../components/AboutPages/AboutBlog.js';
import AboutCompany from '../components/AboutPages/AboutCompany.js';
import AboutGames from "../components/AboutPages/AboutGames.js";
import AboutHome from '../components/AboutPages/AboutHome.js';
import AboutShopping from "../components/AboutPages/AboutShopping.js";
import AboutTravel from '../components/AboutPages/AboutTravel.js';
import AboutTsdc from '../components/AboutPages/AboutTSDC.js';
import MainPage from './MainPage.js';
import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";


export default class Layout extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path={"/"} component={MainPage}/>
          <Route path={"/aboutBand"} component={AboutBand}/>
          <Route path={"/aboutCompany"} component={AboutCompany}/>
          <Route path={"/aboutGames"} component={AboutGames}/>
          <Route path={"/aboutHome"} component={AboutHome}/>
          <Route path={"/aboutShopping"} component={AboutShopping}/>
          <Route path={"/aboutTravel"} component={AboutTravel}/>
          <Route path={"/aboutTSDC"} component={AboutTsdc}/>
          <Route path={"/aboutBlog"} component={AboutBlog}/>
        </Router>
    );
  }
}
