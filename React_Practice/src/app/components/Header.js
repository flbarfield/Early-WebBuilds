import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-elements">
        <nav className="navbar navbar-static-top navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li><a href="#">TEST</a></li>
                <li><a href="#">TEST</a></li>
                <li><a href="#">TEST</a></li>
                <li><a href="#">TEST</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="head-img"></div>
      </div>
    );
  }
}
