import React from 'react';
import WebImageProjectList from '../containers/WebImageProject';
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
    <WebImageProjectList/>
    <Footer/>
  </div>
)

export default MainPage
