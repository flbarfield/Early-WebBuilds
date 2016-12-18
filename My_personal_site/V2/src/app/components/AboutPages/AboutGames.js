import NavBar from "../Navbar.js";
import Abouts from "../Abouts.js";
import {Link} from "react-router";
import React from 'react';

export default class AboutGames extends React.Component {
  toGames () {
    window.location.assign('./app/Past_Projects/games/dist/index.html');
  }

  render() {

    const SPECIFICS = {
      img: "./app/Images/Games.png",
      description: "This page is intended to be a place to safely experiment with Javascript and React programming by the re-creation of classic games! It will be a work in progress for a while, but I believe it will be my go-to way to spend the time where I'm not necessarily looking to learn new technologies."
    }

    return(
      <div>
        <NavBar/>
        <div onClick={this.toGames}>
          <Abouts description={SPECIFICS.description} img={SPECIFICS.img}/>
        </div>
      </div>
    );
  }
}
