'use strict';

import NavBar from "../Navbar";
import Abouts from "../Abouts";
import {Link} from "react-router";
import React from 'react';

export default class AboutShopping extends React.Component {
  toShop () {
    window.location.assign('./app/Past_Projects/Shopping/dist/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "../../static/Images/Shop.png",
      description: "This was created with the goal of eventually linking a database to it to practice my growing SQL skills. But in the process I made a fairly nice layout, and wanted to show it's progress!"
    }

    return(
      <div>
        <NavBar/>
        <div onClick={this.toShop}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
      </div>
    );
  }
}
