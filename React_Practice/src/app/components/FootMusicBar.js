import React from "react";

export default class FootMusicBar extends React.Component {
  render() {
    return(
      <div className="foot-mu">
        <audio className="my-track">
          <source src="./app/audio/Nymphaeum-part1-2.mp3" type="audio/mp3"></source>
        </audio>
        <nav className="foot-wrap">
          <div className="progress-bar">
            <div className="filling-bar"></div>
          </div>
          <div className="default-bar col-xs-12">
            <div className="foot-mu-btns col-xs-12 col-md-4">
              <i className="fa fa-backward"></i>
              <i className="fa fa-play"></i>
              <i className="fa fa-fast-forward"></i>
            </div>
            <div className="foot-mu-info col-xs-4">
              <div className="foot-time-info">
                <span className="foot-time">0:00 /</span>
                <span className="foot-time-duration">0:00</span>
              </div>
              <span className="foot-title col-xs-4">Title</span>
            </div>
            <div className="foot-mu-vol col-xs-4">
              <span className="foot-vol">5</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
