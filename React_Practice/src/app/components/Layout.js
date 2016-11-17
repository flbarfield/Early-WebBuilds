import React from "react";
import Header from "./header";
import Body from "./body";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to Musicitude.",
  };
}

  changeTitle(title) {
    this.setState({title});
  }

  render() {

    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Body/>
      </div>
    );
  }
}