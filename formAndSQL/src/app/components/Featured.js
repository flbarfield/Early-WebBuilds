import React from "react";

export default class Featured extends React.Component {
  render() {
    return(
      <div className="featured">
        <div className="featImgWrap">
          <img className="featImg" src={this.props.itemSRC}/>
        </div>
        <h1>{this.props.itemName}</h1>
        <button>Add To Cart</button>
      </div>
    );
  }
}
