import React from "react";
import {Link} from "react-router";

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <div className="mainPageContainer">
          <h1>Tic Tac Toe</h1>
          <Link to={"/machine"}><button className="machine btn">AGAINST THE MACHINE</button></Link>
          <Link to={"/twoplayers"}><button className="human btn">Against Another Player</button></Link>
        </div>
      </div>
    );
  }
}
