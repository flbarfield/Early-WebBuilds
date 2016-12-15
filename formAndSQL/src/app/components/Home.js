import React from "react";

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <body className="homeBody">
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
                            <h1>Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis id felis placerat, porta nibh ac, tristique est. Proin
                                tempus nulla fringilla turpis tincidunt
                            </p>
                        </div>
                            <input type="text" placeholder="Email Address"/>
                            <button>Sign Up</button>
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
        </body>
      </div>
    );
  }
}
