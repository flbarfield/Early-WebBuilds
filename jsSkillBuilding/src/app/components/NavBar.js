import React from "react";
import {Link} from "react-router";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <Link to={"/"}><i className="navbar-brand fa fa-home" href="#"></i></Link>
          <Link to={"/ticTacToe"}>
            <div className="smallNavImgWrap">
              <img src="/app/images/ticTacToe.png"/>
            </div>
            <div className="smallNavImgWrap">
              <img src="/app/images/dotsNBox.png"/>
            </div>
            <div className="smallNavImgWrap">
              <img src="/app/images/think.png"/>
            </div>
            <div className="smallNavImgWrap">
              <img src="/app/images/spaceInvader.png"/>
            </div>
            <div className="smallNavImgWrap">
              <img src="/app/images/hiking.png"/>
            </div>
            <div className="smallNavImgWrap">
              <img src="/app/images/pingPong.png"/>
            </div>
          </Link>
        </nav>
      </div>
    );
  }
}
