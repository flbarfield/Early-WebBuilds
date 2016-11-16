import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-elements">
        <nav className="navbar navbar-static-top navbar-inverse">
          <div className="container-fluid">
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
        <div className="jumbotron">
          <p>Welcome To Musicitude</p>
        </div>
        <div className="head-img">
          <p>Feed<br/>Your<br/>Creativity</p>
        </div>
      </div>
    );
  }
}
