'use strict';
import Abouts from "../Abouts";
import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class AboutHome extends React.Component {
  toHome() {
  	window.location.assign('./app/Past_Projects/Home_improvement_page/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "/app/Images/Home_SC.png",
      description: "This particular project was the very first I had semi-finished! At the time, this introduced interesting challenges such as figuring out how to use a grid system for element alignment, doing all the animation through my own JavaScript strings because I didn't know much about jquery or plug-ins at all yet, and wrapping my head around how to use iconography. You can also hover over or click the smaller images to display overlaying text"
    }

    return(
      <div>
        <Navbar/>
        <div onClick={this.toHome}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
