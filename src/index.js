import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//import express
const express = require("express");

//import connection from db.js
const { connection } = require("./db.js");

//define post
const port = 4000;

const app = express();

//Start server code
app.listen(port, async () => {
  try {
    //mongo db all operations are done in an async manner so make sure you use async/await
    await connection;

    //on the successful connection this msg will show in your terminal
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }

  console.log("Server is runnig on port number", port);
});
