import React from 'react';
import Footer from "./Footer";

const AboutProj = () => (
  <div>
    <div className='imported-content'>
      <div className='project-info project-wrapper'>
        <div className='proj-pic-wrapper col-xs-12 col-sm-12 col-md-7'>
          <a href='javascript:void(0)'><img src='./app/Images/TSDC_SC.png'/></a>
        </div>
        <a href='javascript:void(0)'><p className='hidden-md hidden-lg mobile-clicky'>TAP HERE TO VIEW</p></a>
        <div className='proj-text col-md-5 col-xs-12'>
          <h1 className='page-heading-additional'>What is this project about?</h1>
          <p>This project was mostly about learning how to integrate AJAX into webpages in order to achieve a smooth and seamless user experience as the website is navigated. This is shown within the main body of the page - new information is updated after clicking a navigation link without needing a refresh.<br/><br/>Building this website also came with the learning experiences of embedding video into a page as well as discovering how to build an image-based header with mis-aligned starting images. I also successfully learned how to created a properly aligned text-overlay for the header.</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)

export default AboutProj
