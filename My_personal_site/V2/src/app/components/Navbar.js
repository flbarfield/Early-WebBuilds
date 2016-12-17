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
      <div>
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
        </div>
      </div>
    );
  }
}
