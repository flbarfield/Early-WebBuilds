import {Link} from "react-router";
import NavBar from "./NavBar"
import React from "react";


export default class Header extends React.Component {
  render() {
    return(
      <div className="ticMain container-fluid">
        <NavBar/>
        <div className="mainPageContainer">
          <h1>Tic Tac Toe</h1>
          <Link to={"/machine"}><button className="machine btn">AGAINST THE MACHINE</button></Link>
          <Link to={"/twoplayers"}><button className="human btn">Against Another Player</button></Link>
        </div>
      </div>
    );
  }
}
