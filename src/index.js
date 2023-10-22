import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

import { onRender } from "./test";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <BrowserRouter>
  // <Profiler id='App' onRender={onRender}>

  //   <App />
  // </Profiler>
  // </BrowserRouter>

  <HashRouter>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
