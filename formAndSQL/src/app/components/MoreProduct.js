import React from "react";

export default class MoreProduct extends React.Component {
  render() {
    return(
      <div className="col-xs-12 col-md-6 col-lg-4">
        <div className="moreImgWrap">
          <img src={this.props.itemSRC}/>
        </div>
        <h1>{this.props.itemName}</h1>
        <h2>{this.props.itemPrice}</h2>
        <button>Add To Cart</button>
      </div>
    );
  }
}
