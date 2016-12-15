import React from "react";
import Square from "./PlayArea/Squares.js";

export default class PlayArea extends React.Component{
  constructor() {
    super();
    this.state={
      squares: Array(9).fill(null),
    };
  }

  render() {
    return(
      <div>
        <div className="ticPlayArea col-xs-12">
          <div className="innerPlay">
            <p className="playerTurn">It's {this.state.playerTurn}'s turn!</p>
            <div className="rowOne row col-xs-12">
              <Square playerSelection="X" currentPlayerClass="squares noPlayer"/>
              <Square currentPlayerClass="squares noPlayer"/>
              <Square currentPlayerClass="squares noPlayer"/>
            </div>
            <div className="rowTwo row col-xs-12">
              <Square currentPlayerClass="squares noPlayer"/>
              <Square currentPlayerClass="squares noPlayer"/>
              <Square currentPlayerClass="squares noPlayer"/>
            </div>
            <div className="rowThree row col-xs-12">
              <Square currentPlayerClass="squares noPlayer"/>
              <Square currentPlayerClass="squares noPlayer"/>
              <Square currentPlayerClass="squares noPlayer"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const WIN_CONDITIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,5],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const BOARD = [
  [0,1,2],
  [3,4,5],
  [6,7,8]
]

function checkWinX () {
  null
}

function checkWinO() {
  null
}

function selectSquare () {
  this.bind.setState(player: "O");
}
