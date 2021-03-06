'use strict';
import Abouts from "../Abouts";
import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class AboutTravel extends React.Component {
  toTravel() {
  	window.location.assign('./app/Past_Projects/Tourist_page/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "/app/Images/Travel_SC.png",
      description: "In this project, I discovered how to embed pre-existing plug-ins into projects. While I understand it may be best practice to not completely rely on them, there's no doubt that it drastically cuts down on development time as well smistakes made by the novice programmer! Examples are as follows: Slideshow at the top of the page, color transistions for the icons within the city directory, billing, and social icon sections and the widget used to display the local weather."
    }

    return(
      <div>
        <Navbar/>
        <div onClick={this.toTravel}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
