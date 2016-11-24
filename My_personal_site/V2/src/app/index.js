import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import "./styles/scss/style.scss";
import Layout from "./components/Layout";

const app = document.getElementById("app");
render(<Layout/>, app);
