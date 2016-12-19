import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import Layout from "./containers/Layout.js";
import "./styles/scss/style.scss";


const app = document.getElementById("app");
render(<Layout/>, app);
