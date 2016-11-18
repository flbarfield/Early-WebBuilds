import React from "react";
import Title from "./Title.js";

// backgroundImage: "url(${Background})"

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    const headImgStyle = {
      backgroundImage: "url('./app/images/largeband.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      height: "15em"
    };

    return (
      <div className="header-elements">
        <nav className="navbar navbar-static-top navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header col-xs-12">
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
          <Title title={this.props.title} />
          <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="head-img" style={headImgStyle}>
          <h2>Feed<br/>Your<br/>Creativity</h2>
        </div>
      </div>
    );
  }
}
