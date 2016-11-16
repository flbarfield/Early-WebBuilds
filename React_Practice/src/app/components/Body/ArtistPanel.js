import React from "react";
import Pan_image from "./ArtistPanel/Pan_image"


export default class ArtistPanel extends React.Component {
  render() {
    return (
      <div className="artist-panel col-xs-4">
        <div className="mu-img-wrap">
          <Pan_image pan_image={this.props.pan_image}/>
        </div>
        <div className="mu-info">
          <h3 className="artist">Lorem ipsum dolor</h3>
          <p className="song">Nunc sed erat ac diam</p>
          <div className="ctrl-btns"></div>
        </div>
      </div>
    );
  }
}
