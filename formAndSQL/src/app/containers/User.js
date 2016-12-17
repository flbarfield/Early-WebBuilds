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
            <button className="headBtn" href="#shop">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="featuredRow row">
          <Featured itemName={PRODUCTS[0].name} itemSRC={PRODUCTS[0].source}/>
          <Featured itemName={PRODUCTS[1].name} itemSRC={PRODUCTS[1].source}/>
          <Featured itemName={PRODUCTS[2].name} itemSRC={PRODUCTS[2].source}/>
        </div>
        <div className="moreProduct">
          <div className="moreBar">
            <p>What's on sale?</p>
          </div>
          <div className="moreProductRow1">
            <MoreProduct itemName={PRODUCTS[3].name} itemSRC={PRODUCTS[3].source} itemPrice={"$" + PRODUCTS[3].itemPrice}/>
            <MoreProduct itemName={PRODUCTS[8].name} itemSRC={PRODUCTS[8].source} itemPrice={"$" + PRODUCTS[8].itemPrice}/>
            <MoreProduct itemName={PRODUCTS[5].name} itemSRC={PRODUCTS[5].source} itemPrice={"$" + PRODUCTS[5].itemPrice}/>
          </div>
          <div className="moreProductRow2">
            <MoreProduct itemName={PRODUCTS[6].name} itemSRC={PRODUCTS[6].source} itemPrice={"$" + PRODUCTS[6].itemPrice}/>
            <MoreProduct itemName={PRODUCTS[7].name} itemSRC={PRODUCTS[7].source} itemPrice={"$" + PRODUCTS[7].itemPrice}/>
            <MoreProduct itemName={PRODUCTS[9].name} itemSRC={PRODUCTS[9].source} itemPrice={"$" + PRODUCTS[9].itemPrice}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const PRODUCTS = [
  {name: "cloCombo1", source: "/app/images/cloCombo1.jpg", itemPrice: 300}, //0
  {name: "cloCombo2", source: "/app/images/cloCombo2.jpg", itemPrice: 250}, //1
  {name: "cloCombo3", source: "/app/images/cloCombo3.jpg", itemPrice: 520}, //2
  {name: "Sweater", source: "/app/images/sweater.jpg", itemPrice: 75}, //3
  {name: "Jackets", source: "/app/images/jackets.jpg", itemPrice: 150}, //4
  {name: "Batman", source: "/app/images/batman.jpg", itemPrice: 95}, //5
  {name: "Black Dress", source: "/app/images/galNDress.jpg", itemPrice: 150}, //6
  {name: "Tan Dress", source:"/app/images/boredress.jpg", itemPrice: 45}, // 7
  {name: "Headphones", source: "/app/images/goofyHeadphones.jpg", itemPrice: 25}, //8
  {name: "Outfit", source: "/app/images/jeansNSkirt.jpg", itemPrice: 85} //9
];
