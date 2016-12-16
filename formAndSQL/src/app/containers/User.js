import Featured from "../components/Featured.js";
import Footer from "../components/Footer.js";
import MoreProduct from "../components/MoreProduct.js";
import React from "react";
import UserNav from "../components/UserNav.js";

export default class User extends React.Component {
  render () {
    return(
      <div>
        <UserNav/>
        <div className="shopPageHeader">
          <div className="shopHeadImg">
            <div className="drkOverlay">
            <h1>Welcome to Shop 'N Drop</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum viverra volutpat. Integer lobortis erat eget pharetra efficitur. Phasellus interdum volutpat nisi hendrerit efficitur. Etiam in orci felis. In sollicitudin ex leo.
            </h2>
            <button href="#shop">SHOP NOW</button>
            </div>
          </div>
          <div className="featuredRow row">
            <Featured/>
            <Featured/>
            <Featured/>
          </div>
          <div className="moreProduct">
            <div className="moreBar">
              <p>What's on sale?</p>
            </div>
            <div className="moreProductRow1">
              <MoreProduct/>
              <MoreProduct/>
              <MoreProduct/>
            </div>
            <div className="moreProductRow2">
              <MoreProduct/>
              <MoreProduct/>
              <MoreProduct/>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
