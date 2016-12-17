import NavBar from "../Navbar.js";
import Abouts from "../Abouts.js";
import React from 'react';

export default class AboutBand extends React.Component {
  toBand() {
  		window.location.assign('./app/Past_Projects/Band_stream/dist/index.html')
  }

  render() {

    const SPECIFICS = {
      img: "./app/Images/Bandstream.png",
      description: "This features four behind-the-scenes technologies that I have never worked with before: Sass, Webpack, React, Redux. All of these tools help gear me toward working with a team, as most of it includes varioius features that allow you to split your code into seperate and easily reusable components. I also gained the ability to uglify, compress, and keep my code in a virtual DOM that's seperate from the real DOM which that allows for faster render times. My build system also allows me error check and debug my projects before I even put it online."
    }

    return(
      <div>
        <NavBar/>
        <div to={this.toBand}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
      </div>
    );
  }
}
