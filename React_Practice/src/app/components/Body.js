import React from "react";

export default class Body extends React.Component {
  render() {
    return (
      <div className="music-choices col-xs-12">
        <div className="row col-xs-12">
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/acoustic.jpg"/>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/funkydrums.jpg"/>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap-wrap">
              <img src="/app/images/hops.jpg"/>
            </div>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
            <img src="/app/images/keyboard.jpg"/></div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/saxband.jpg"/>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/sing.jpg"/>
            </div>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/sitacoustic.jpg"/>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/voice.jpg"/>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/whitehops.jpg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
