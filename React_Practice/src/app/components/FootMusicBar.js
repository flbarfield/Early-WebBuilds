import React from "react";

export default class FootMusicBar extends React.Component {

  onPlayOrPause(){
    let currentTrack = document.getElementById("current-track");

    if (!currentTrack.paused && !currentTrack.ended) {
      currentTrack.pause();
      currentTrack.classList.remove("fa-play");
      currentTrack.classList.add("fa-pause");
    } else {
      currentTrack.play();
      currentTrack.classList.remove("fa-pause");
      currentTrack.classList.add("fa-play");
    }
  }

  soDuration() {
    let duration = document.getElementById("footTimeDuration");
  }

  soTime() {
    let time = document.getElementById("footTime");
  }

  render() {

    return(
      <div className="foot-mu">
        <audio id="current-track">
          <source src="./app/audio/Nymphaeum-part1-2.mp3" type="audio/mp3"></source>
        </audio>
        <nav className="foot-wrap">
          <div className="default-bar container">
            <div className="progress-bar">
              <div className="filling-bar"></div>
            </div>
            <div className="foot-mu-btns col-xs-12">
              <i className="fa fa-backward col-xs-4"></i>
              <i onClick={this.onPlayOrPause.bind(this)} className="fa fa-play col-xs-4"></i>
              <i className="fa fa-fast-forward col-xs-4"></i>
            </div>
            <div className="foot-mu-info col-xs-8">
              <div className="foot-time-info col-xs-8">
                <span id="footTime" className="foot-time">0:00 /</span>
                <span id="footTimeDuration" className="foot-time-duration"> 0:00</span>
              </div>
              <span className="foot-title col-xs-3">Title</span>
            </div>
            <div className="foot-mu-vol col-xs-3">
              <span className="foot-vol-title">Vol: </span>
              <span className="foot-vol">5</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
