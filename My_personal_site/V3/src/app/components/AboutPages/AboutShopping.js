'use strict';
import Abouts from "../Abouts";
import {Link} from "react-router";
import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class AboutShopping extends React.Component {
  toShop () {
    window.location.assign('./app/Past_Projects/Shopping/dist/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "/app/Images/Shop.png",
      description: "This was created with the goal of eventually linking a database to it to practice my growing SQL skills. But in the process I made an okay looking layout, so I wanted to share it's progress!"
    }

    return(
      <div>
        <Navbar/>
        <div onClick={this.toShop}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
