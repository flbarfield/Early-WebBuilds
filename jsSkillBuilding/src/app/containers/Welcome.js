import Footer from "../components/Footer.js";
import {Link} from "react-router";
import React from "react";
import NavBar from "../components/NavBar.js";

export default class Welcome extends React.Component {
  render () {
    return (
      <div className="welcomePage">
        <NavBar/>
        <div className="welIntro">
          <h1>Welcome!</h1>
          <h2 className="welAbout">
            This is an application where I plan to showcase miniature projects that I've created specifically for the purpose of brushing up on my Javascript skills. No jQuery at all was used in the production of this page!
          </h2>
        </div>
        <Link to={"/ticTacToe"}><div className="ticTac welProject">
          <h1>Tic Tac Toe</h1>
          <h2>Play against the AI or with a friend!</h2>
          <div className="welOverlay"></div>
        </div></Link>
        <Footer/>
      </div>
    );
  }
}
