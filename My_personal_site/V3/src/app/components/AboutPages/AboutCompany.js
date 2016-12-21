'use strict';

import Abouts from "../Abouts";
import NavBar from "../Navbar";
import React from 'react';

export default class AboutCompany extends React.Component {
  toCompany() {
  	window.location.assign('./app/Past_Projects/Company_Page/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "/app/Images/Images/company_SC.png",
      description: "Aesthetics and polish was the theme of this webpage. Up until now, I was rushing through the creation of all of my pages in order to try the next new technique or technology that I had caught wind of. With this I took the time to really slow down and tweek the little details to create a finished looking result - and it was fun! I'm now inspired to revamp everything else I've done up to this point. This also has surprisingly little javascript involved, before now I had used it for the bulk of my visual effects when simple CSS rules did it easier and faster. Such as transitioning color and creating a dynamic nav menu."
    }

    return(
      <div>
        <NavBar/>
        <div onClick={this.toCompany}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
      </div>
    );
  }
}
