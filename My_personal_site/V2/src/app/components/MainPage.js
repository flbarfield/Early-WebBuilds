import React from 'react';
import WebImageProject from './MainPage/WebImageProject';
import Footer from './Footer';

  // <WebImageProject topic="company" direction="left" imgSrc="./app/Images/company_SC.png"/>

const MainPage = () => (
  <div>
    <div className='jumbotron jumbotron-main'>
      <div>
        <h1>Fredrick Barfield</h1>
        <h2>Front End Web Development</h2>
        <h3>HTML <span className='fa fa-circle'></span> CSS <span className='fa fa-circle'></span> JavaScript</h3>
      </div>
    </div>
    <h1 className='page-heading'>Project Examples</h1>

    <div className='project-wrapper'>
      <div className='main-img-wrap col-xs-12 col-sm-12 col-md-12'>
        <a href='#' className='company'><img className='col-xs-12 col-sm-12 col-md-12' src='./app/Images/company_SC.png'/></a>
      </div>
    </div>
    <div className='project-wrapper'>
      <div className='main-img-wrap col-xs-12 col-sm-12 col-md-12 right'>
        <a href='#' className='tsdc'><img className='col-xs-12 col-sm-12 col-md-12' src='./app/Images/TSDC_SC.png'/></a>
      </div>
    </div>
    <div className='project-wrapper'>
      <div className='main-img-wrap col-xs-12 col-sm-12 col-md-12'>
        <a href='#' className='band'><img className='col-xs-12 col-sm-12 col-md-12' src='./app/Images/Bandstream.png'/></a>
      </div>
    </div>
    <div className='project-wrapper'>
      <div className='main-img-wrap col-xs-12 col-sm-12 col-md-12 right'>
        <a href='#' className='tourist'><img className='col-xs-12 col-sm-12 col-md-12' src='./app/Images/Travel_SC.png'/></a>
      </div>
    </div>
    <div className='project-wrapper'>
      <div className='main-img-wrap col-xs-12 col-sm-12 col-md-12'>
        <a href='#' className='fila'><img className='col-xs-12 col-sm-12 col-md-12' src='./app/Images/Fila_SC.png'/></a>
      </div>
    </div>
    <div className='project-wrapper'>
      <div className='main-img-wrap col-xs-12 col-sm-12 col-md-12 right'>
        <a href='#' className='blog'><img className='col-xs-12 col-sm-12 col-md-12' src='./app/Images/Blog_SC.png'/></a>
      </div>
    </div>
    <div className='project-wrapper'>
      <div className='main-img-wrap col-xs-12 col-sm-12 col-md-12'>
        <a href='#' className='home-website'><img className='col-xs-12 col-sm-12 col-md-12' src='./app/Images/Home_SC.png'/></a>
      </div>
    </div>
    <Footer/>
  </div>
)

export default MainPage
