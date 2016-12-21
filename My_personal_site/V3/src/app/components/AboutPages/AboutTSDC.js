'use strict';
import NavBar from "../Navbar";
import Abouts from "../Abouts";
import React from 'react';

export default class AboutTsdc extends React.Component {
  toTsdc() {
  	window.location.assign('./app/Past_Projects/TSDC/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "/app/Images/TSDC_SC.png",
      description: "This project was mostly about learning how to integrate AJAX into webpages in order to achieve a smooth and seamless user experience as the website is navigated. This is shown within the main body of the page - new information is updated after clicking a navigation link without needing a refresh. Building this website also came with the learning experiences of embedding video into a page as well as discovering how to build an image-based header with mis-aligned starting images."
    }

    return(
      <div>
        <NavBar/>
        <div onClick={this.toTsdc}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
      </div>
    );
  }
}
