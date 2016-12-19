import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import Layout from "./containers/Layout.js";
import "./styles/scss/style.scss";

// App = React.createFactory(require(Layout));

const app = document.getElementById("app");

if(typeof window !== "undefined") {
  window.onload = function () {
    render(<Layout/>, app);
  }
}
