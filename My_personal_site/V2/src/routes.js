'use strict';

import AboutBand from './components/AboutPages/AboutBand';
import AboutBlog from './components/AboutPages/AboutBlog';
import AboutCompany from './components/AboutPages/AboutCompany';
import AboutGames from './components/AboutPages/AboutGames';
import AboutHome from './components/AboutPages/AboutHome';
import AboutShopping from './components/AboutPages/AboutShopping';
import AboutTravel from './components/AboutPages/AboutTravel';
import AboutTsdc from './components/AboutPages/AboutTSDC';
import MainPage from './components/MainPage';
import NotFoundPage from './components/NotFoundPage'
import React from 'react';
import {Route, IndexRoute} from 'react-router';

const routes = (
  <Route path={"/"} component={MainPage}>
    <Route path={"aboutBand"} component={AboutBand}/>
    <Route path={"aboutCompany"} component={AboutCompany}/>
    <Route path={"aboutGames"} component={AboutGames}/>
    <Route path={"aboutHome"} component={AboutHome}/>
    <Route path={"aboutShopping"} component={AboutShopping}/>
    <Route path={"aboutTravel"} component={AboutTravel}/>
    <Route path={"aboutTSDC"} component={AboutTsdc}/>
    <Route path={"aboutBlog"} component={AboutBlog}/>
    <Route path={"*"} componenet={NotFoundPage}/>
  </Route>
);

export default routes;
