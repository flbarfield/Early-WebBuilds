import React from "react";

export default class PlayArea extends React.Component{
  render() {
    return(
      <div>
        <div className="ticPlayArea col-xs-12">
          <div className="innerPlay">
            <div className="rowOne row col-xs-12">
              <div className="squares sq1 xPlayer"><span>X</span></div>
              <div className="squares sq2 xPlayer"><span>X</span></div>
              <div className="squares sq3 xPlayer"><span>X</span></div>
            </div>
            <div className="rowTwo row col-xs-12">
              <div className="squares sq4 oPlayer"><span>O</span></div>
              <div className="squares sq5 oPlayer"><span>O</span></div>
              <div className="squares sq6 oPlayer"><span>O</span></div>
            </div>
            <div className="rowThree row col-xs-12">
              <div className="squares sq7 noPlayer"><span></span></div>
              <div className="squares sq8 noPlayer"><span></span></div>
              <div className="squares sq9 noPlayer"><span></span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
