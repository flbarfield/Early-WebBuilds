import React from "react";
import ArtistPanel from "./Body/ArtistPanel";

export default class Body extends React.Component {
  render() {
    return (
      <div className="music-choices container-fluid">
        <div className="row">
          <ArtistPanel/>
          <ArtistPanel/>
          <ArtistPanel/>
        </div>
        <div className="row">
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/keyboard.jpg"/>
            </div>
            <div className="mu-info">
              <h3 className="artist">Lorem ipsum dolor</h3>
              <p className="song">Nunc sed erat ac diam</p>
              <div className="ctrl-btns"></div>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/saxband.jpg"/>
            </div>
            <div className="mu-info">
              <h3 className="artist">Lorem ipsum dolor</h3>
              <p className="song">Nunc sed erat ac diam</p>
              <div className="ctrl-btns"></div>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/sing.jpg"/>
            </div>
            <div className="mu-info">
              <h3 className="artist">Lorem ipsum dolor</h3>
              <p className="song">Nunc sed erat ac diam</p>
              <div className="ctrl-btns"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/sitacoustic.jpg"/>
            </div>
            <div className="mu-info">
              <h3 className="artist">Lorem ipsum dolor</h3>
              <p className="song">Nunc sed erat ac diam</p>
              <div className="ctrl-btns"></div>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/voice.jpg"/>
            </div>
            <div className="mu-info">
              <h3 className="artist">Lorem ipsum dolor</h3>
              <p className="song">Nunc sed erat ac diam</p>
              <div className="ctrl-btns"></div>
            </div>
          </div>
          <div className="artist-panel col-xs-4">
            <div className="mu-img-wrap">
              <img src="/app/images/whitehops.jpg"/>
            </div>
            <div className="mu-info">
              <h3 className="artist">Lorem ipsum dolor</h3>
              <p className="song">Nunc sed erat ac diam</p>
              <div className="ctrl-btns"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
