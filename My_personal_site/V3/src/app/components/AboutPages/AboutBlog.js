'use strict';

import Abouts from "../Abouts";
import NavBar from "../Navbar";
import React from 'react';

export default class AboutBlog extends React.Component {
  toBlog () {
    window.location.assign('./app/Past_Projects/Blog_V3/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "/app/Images/Blog_SC.png",
      description: "So far, this is merely a small page I created just to familiarize myself further with Bootstrap. Sometime soon, I do hope to add extra functionality such as the ability to actually add and delete comments and posts, account creation, and so on hoping that it will aid in developing my understanding of back-end languages and how they relate to front-end."
    }


    return(
      <div>
        <NavBar/>
        <div onClick={this.toBlog}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
      </div>
    );
  }
}
