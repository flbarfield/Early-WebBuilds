import {Link} from "react-router";
import React from "react";

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="homeBody">
            <div>
                <nav className="navbar navbar-default container-fluid">
                    <ul>
                        <li><i className="fa fa-home"></i></li>
                        <li><i className="fa fa-download"></i></li>
                        <li><i className="fa fa-caret-left"></i></li>
                        <li><i className="fa fa-caret-right"></i></li>
                    </ul>
                </nav>
                <div className="page container">
                    <div className="content">
                        <div className="header">
                            <h1>Welcome</h1>
                            <p>
                                This is a web application created for the purpose of learning and practicing SQL. <br/><br/>Press the Sign Up button to continue. You don't have to enter an email.
                            </p>
                        </div>
                            <input type="text" placeholder="Email Address"/>
                            <Link to={"/shop"}><button>Sign Up</button></Link>
                            <div className="head-icons">
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-github"></i>
                                <i className="fa fa-mail"></i>
                            </div>
                            <span><i className="fa fa-copyright">Untitled</i></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
