'use strict';
import React from "react";

const Footer = () => (
  <div>
    <footer className='project-info-footer'>
      <div id='project-info-aboutme' className='project-info-about col-xs-12 col-md-6'>
        <p><img className='ricky'src="/app/Images/Ricky.jpg"/>Fredrick is a passionate Self-Starter that has learned a variety of different IT technologies from HTML and Javascript to Python through textbook, documentation, and experimental programming on his own free time. <br/> <br/> Previous years of work within the hospitality industry also gives him exceptional skills at quickly adapting to a client's needs as well as instilling the idea that communication should be of utmost priority within any project. </p>
      </div>
      <div className='project-info-links col-xs-12 col-md-6'>
        <div className='git-wrapper col-xs-6'>
          <a href='https://github.com/flbarfield'><i className='fa fa-github'></i></a>
          <p>@flbarfield on GitHub</p>
        </div>
        <div className='mail-wrapper col-xs-6'>
          <a href='mailto:flbarfield@yahoo.com'><i className='fa fa-envelope'></i></a>
          <p>Message Fredrick</p>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
