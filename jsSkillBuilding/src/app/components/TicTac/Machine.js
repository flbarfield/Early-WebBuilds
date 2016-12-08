import React from "react";
import NavBar from "../NavBar.js";
import PlayArea from "./PlayArea.js";

export default class Machine extends React.Component{
  render() {
    return(
      <div className="machinePlay">
        <NavBar/>
        <PlayArea/>
      </div>
    );
  }
}
