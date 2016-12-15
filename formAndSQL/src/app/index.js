// __webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/"
import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";

import Layout from "./containers/Layout.js";

const app = document.getElementById('app');
render(<Layout/>, app);
