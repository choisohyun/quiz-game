import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install();
}
