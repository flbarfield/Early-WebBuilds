import React from "react";

export default class PlayArea extends React.Component{
  constructor() {
    super();
    this.state={
      playerSelection: "O",
      playerTurn: "X"
    };
  }
  selectSquare() {
    this.setState({playerSelection: "X"})
  }

  render() {
    return(
      <div>
        <div className="ticPlayArea col-xs-12">
          <div className="innerPlay">
            <p className="playerTurn">It's {this.state.playerTurn}'s turn!</p>
            <div className="rowOne row col-xs-12">
              <div onClick={this.selectSquare.bind(this)} className="squares sq1 xPlayer"><span>{this.state.playerSelection}</span></div>
              <div className="squares sq2 xPlayer"><span>{this.state.playerSelection}</span></div>
              <div className="squares sq3 xPlayer"><span>{this.state.playerSelection}</span></div>
            </div>
            <div className="rowTwo row col-xs-12">
              <div className="squares sq4 oPlayer"><span>{this.state.playerSelection}</span></div>
              <div className="squares sq5 oPlayer"><span>{this.state.playerSelection}</span></div>
              <div className="squares sq6 oPlayer"><span>{this.state.playerSelection}</span></div>
            </div>
            <div className="rowThree row col-xs-12">
              <div className="squares sq7 noPlayer"><span>{this.state.playerSelection}</span></div>
              <div className="squares sq8 noPlayer"><span>{this.state.playerSelection}</span></div>
              <div className="squares sq9 noPlayer"><span>{this.state.playerSelection}</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const WIN_CONDITIONS = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,6],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

const BOARD = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

function checkWin () {
  null
}

function selectSquare () {
  this.bind.setState(player: "O");
}
