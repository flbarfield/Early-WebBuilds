import React from "react";
import NavBar from "../NavBar.js";
import PlayArea from "./PlayArea.js";

export default class TwoP extends React.Component{
  render() {
    return(
      <div className="twoPlay">
        <NavBar/>
        <PlayArea/>
      </div>
    );
  }
}
