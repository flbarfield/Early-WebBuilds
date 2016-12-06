import React from "react";

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>Tic Tac Toe</h1>
        <button className="machine">AGAINST THE MACHINE</button>
        <button className="p2">Against Another Player</button>
      </div>
    );
  }
}
