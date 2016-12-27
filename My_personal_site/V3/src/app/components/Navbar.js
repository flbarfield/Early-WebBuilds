'use strict';

import React from "react";
import {Link} from "react-router";

export default class NavBar extends React.Component {

  openNav() {
  	document.getElementById('hidden-nav').style.width = '22em';
  	document.getElementById('hidden-nav').style.borderColor = 'rgb(252, 232, 54)';
  }

  closeNav() {
  	document.getElementById('hidden-nav').style.width = '0';
  	document.getElementById('hidden-nav').style.borderColor = 'rgb(34, 34, 34)';
  }

  render() {
    return (
      <div className='totalNav'>
        <div>
          <nav className='navbar navbar-inverse navbar-fixed-top'>
              <div className='container-fluid'>
                <ul className='nav navbar-nav'>
                  <li><Link to={"/"} activeClassName={"active"}>Home</Link></li>
                  <li onClick={this.openNav}><a id='project-link' href='javascript:void(0)'>Project List</a></li>
                  <li><a href='#project-info-aboutme'>About Me</a></li>
                </ul>
              </div>
            </nav>
            <div id='hidden-nav'>
              <i onClick={this.closeNav}className='fa fa-close'></i>
              <div id='nav-text'>
                <h1>Other Projects</h1>
                <ul>
                  <Link to={"/aboutCompany"} href='#'><li>Company Page (Layout/CSS centric practice)</li></Link>
                  <Link to={"/aboutShopping"} href='#'><li>Shop Page (Layout and eventual SQL practice)</li></Link>
                  <Link to={"/aboutTSDC"} href='#'><li>Swing Dance Club (AJAX/Video)</li></Link>
                  <Link to={"/aboutGames"} href='#'><li>Games Recreation (Pure Javascript/React Interactivity)</li></Link>
                  <Link to={"/aboutBand"} href='#'><li>Band Stream (Intro to React/webpack/Sass)</li></Link>
                  <Link to={"/aboutTravel"} href='#'><li>Travel Page (Intro to CSS interactivity)</li></Link>
                  <Link to={"/aboutBlog"} href='#'><li>Blog (Layout Practice)</li></Link>
                  <Link to={"/aboutHome"} href='#'><li>Home and Furnishing (Intro to image manipulation)</li></Link>
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
