import React from "react";

export default class PlayArea extends React.Component{
  render() {
    return(
      <div>
        <div className="ticPlayArea col-xs-12">
          <div className="rowOne row col-xs-12">
            <div className="squares sq1 col-xs-4"><span>X</span></div>
            <div className="squares sq2 col-xs-4"><span>X</span></div>
            <div className="squares sq3 col-xs-4"><span>X</span></div>
          </div>
          <div className="rowTwo row col-xs-12">
            <div className="squares sq4 col-xs-4"><span>X</span></div>
            <div className="squares sq5 col-xs-4"><span>X</span></div>
            <div className="squares sq6 col-xs-4"><span>X</span></div>
          </div>
          <div className="rowThree row col-xs-12">
            <div className="squares sq7 col-xs-4"><span>X</span></div>
            <div className="squares sq8 col-xs-4"><span>X</span></div>
            <div className="squares sq9 col-xs-4"><span>X</span></div>
          </div>
        </div>
      </div>
    );
  }
}
