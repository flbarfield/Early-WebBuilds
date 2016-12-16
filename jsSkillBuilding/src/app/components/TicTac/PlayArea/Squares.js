import React from "react";

export default class Square extends React.Component {
  constructor () {
    super();
    this.state = {
      value: null,
      currentPlayerClass: "squares noPlayer"};
  }

  onSelection () {
    if (this.state.value === null && playerTurn === false) {
      this.setState({value: "X", currentPlayerClass: "squares xPlayer"});
      playerTurn = true;
    } else if (this.state.value === null && playerTurn === true){
      this.setState({value: "O", currentPlayerClass: "squares oPlayer"});
      playerTurn = false;
    }
  }

  render() {
    return(
      <div className={this.state.currentPlayerClass} onClick={this.onSelection.bind(this)}>
        <div>
          <span>
            {this.state.value}
          </span>
        </div>
      </div>
    )
  }
}

var playerTurn = false;
