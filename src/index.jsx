import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";

import App from "./App";

import firebase from "./firebase/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App firebase={firebase} />
  </React.StrictMode>,
  document.getElementById("root")
);
