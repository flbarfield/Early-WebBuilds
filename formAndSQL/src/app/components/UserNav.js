import React from "react";

export default class UserNav extends React.Component {
  render() {
    return(
      <div>
        <div className="userNav">
          <div className="shopHeader">
            <span>Shop 'n Drop</span>
            <div className="searchBar">
              <input placeholder="Search..."/>
            </div>
            <i className="fa fa-shopping-cart"></i>
          </div>
          <nav className="shopNav navbar navbar-default">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <i className="fa fa-bars"></i>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>Home</li>
                <li>Sale</li>
                <li>Handbags</li>
                <li>Wallets</li>
                <li>Accessories</li>
                <li>Men's Store</li>
                <li>Shoes</li>
                <li>Vintage</li>
                <li>Services</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
