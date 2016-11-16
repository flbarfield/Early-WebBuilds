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
          <h1>Welcome To Musicitude</h1>
        </div>
        <div className="head-img">
          <h2>Feed<br/>Your<br/>Creativity</h2>
        </div>
      </div>
    );
  }
}
