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
            <Featured itemName={PRODUCTS[0].name} itemSRC={PRODUCTS[0].src}/>
            <Featured itemName={PRODUCTS[1].name} itemSRC={PRODUCTS[1].src}/>
            <Featured itemName={PRODUCTS[2].name} itemSRC={PRODUCTS[2].src}/>
          </div>
          <div className="moreProduct">
            <div className="moreBar">
              <p>What's on sale?</p>
            </div>
            <div className="moreProductRow1">
              <MoreProduct itemName={PRODUCTS[3].name} itemSRC={PRODUCTS[3].src} itemPrice={PRODUCTS[3].itemPrice}/>
              <MoreProduct itemName={PRODUCTS[4].name} itemSRC={PRODUCTS[4].src} itemPrice={PRODUCTS[4].itemPrice}/>
              <MoreProduct itemName={PRODUCTS[5].name} itemSRC={PRODUCTS[5].src} itemPrice={PRODUCTS[5].itemPrice}/>
            </div>
            <div className="moreProductRow2">
              <MoreProduct itemName={PRODUCTS[6].name} itemSRC={PRODUCTS[6].src} itemPrice={PRODUCTS[6].itemPrice}/>
              <MoreProduct itemName={PRODUCTS[7].name} itemSRC={PRODUCTS[7].src} itemPrice={PRODUCTS[7].itemPrice}/>
              <MoreProduct itemName={PRODUCTS[9].name} itemSRC={PRODUCTS[9].src} itemPrice={PRODUCTS[8].itemPrice}/>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

const PRODUCTS = [
  {name: "cloCombo1", src: "/app/images/cloCombo1.jpg", itemPrice: 150}, //0
  {name: "cloCombo2", src: "/app/images/cloCombo2.jpg", itemPrice: 150}, //1
  {name: "cloCombo3", src: "/app/images/cloCombo3.jpg", itemPrice: 150}, //2
  {name: "cloCombo4", src: "/app/images/cloCombo1.jpg", itemPrice: 150}, //3
  {name: "jackets", src: "/app/images/jackets.jpg", itemPrice: 150}, //4
  {name: "batman", src: "/app/images/batman.jpg", itemPrice: 150}, //5
  {name: "dress", src: "/app/images/galNDress.jpg", itemPrice: 150}, //6
  {name: "dress2", src:"/app/images/boredress.jpg", itemPrice: 150}, // 7
  {name: "headphones", src: "/app/images/goofyHeadphones.jpg", itemPrice: 150}, //8
  {name: "skirt", src: "/app/images/jeansNSkirt.jpg", itemPrice: 150} //9
];
