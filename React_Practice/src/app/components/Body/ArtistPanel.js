import React from "react";

const Images = [
  "/app/images/acoustic.jpg",
  "/app/images/funkydrums.jpg",
  "/app/images/hops.jpg",
  "/app/images/keyboard.jpg",
  "/app/images/saxband.jpg",
  "/app/images/sing.jpg",
  "/app/images/sitacoustic.jpg",
  "/app/images/voice.jpg",
  "/app/images/whitehops.jpg"
].map((imgLink, i) => <img src={imgLink}/>);

export default class ArtistPanel extends React.Component {
  render() {
    return (
      <div className="artist-panel col-xs-4">
        <div className="mu-img-wrap">
          {Images [1]}
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
