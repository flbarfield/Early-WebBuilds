import React from "react";
import {Link} from "react-router";

const Nav = React.createClass({
  render() {
    return (
      <div>
        <div>
          <nav className='navbar navbar-inverse navbar-fixed-top'>
              <div className='container-fluid'>
                <ul className='nav navbar-nav'>
                  <li><Link to={"/"} activeClassName={"active"}>Home</Link></li>
                  <li><a id='project-link' href='javascript:void(0)'>Project List</a></li>
                  <li><a href='#project-info-aboutme'>About Me</a></li>
                </ul>
              </div>
            </nav>
            <div id='hidden-nav'>
              <a href='javascriot:void(0)'><i className='fa fa-close'></i></a>
              <div id='nav-text'>
                <h1>Other Projects</h1>
                <ul>
                  <a href='#' className='company'><li>Company Page (Layout/CSS centric practice)</li></a>
                  <a href='#' className='tsdc'><li>Swing Dance Club (AJAX/Video)</li></a>
                  <a href='#' className='band'><li>Band Stream (React/webpack/Sass)</li></a>
                  <a href='#' className='tourist'><li>Travel Page (Intro to Interactivity)</li></a>
                  <a href='#' className='fila'><li>Intro to scroll based animation</li></a>
                  <a href='#' className='home-website'><li>Home and Furnishing (Intro to image manipulation)</li></a>
                  <a href='#' className='blog'><li>Blog Layout Practice</li></a>
                </ul>
              </div>
            </div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Nav
