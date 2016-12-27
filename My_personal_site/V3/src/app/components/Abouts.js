'use strict';
import Navbar from "./Navbar"
import React from 'react';
import Footer from "./Footer";

export default class Abouts extends React.Component {
  render() {
    return(
      <div>

        <div className='imported-content container-fluid'>
          <div className='project-info project-wrapper'>
            <div className='proj-pic-wrapper col-xs-12 col-sm-12 col-md-7'>
              <a href='javascript:void(0)'><img src={this.props.img}/></a>
            </div>
            <a href='javascript:void(0)'><p className='hidden-md hidden-lg mobile-clicky'>TAP HERE TO VIEW</p></a>
            <div className='proj-text col-md-5 col-xs-12'>
              <h1 className='page-heading-additional'>What is this project about?</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
