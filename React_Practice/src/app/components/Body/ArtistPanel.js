import React from "react";
import Pan_image from "./ArtistPanel/Pan_image"


export default class ArtistPanel extends React.Component {
  render() {
    return (
      <div className="artist-panel col-xs-12 col-md-4">
        <div className="inner-artist-wrap col-xs-12">
          <div className="mu-img-wrap col-xs-12">
            <Pan_image pan_image={this.props.pan_image}/>
          </div>
          <div className="mu-info col-xs-12">
            <h3 className="artist">Lorem ipsum dolor</h3>
            <p className="song">Nunc sed erat ac diam</p>
            <div className="ctrl-btn">
              <i className="fa fa-play col-xs-4"></i>
              <span className="runtime col-xs-4">05:05</span>
              <i className="fa fa-download col-xs-4"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
