/////////////////
//
// Filename: index.js
// Author: Daniel Long
// Course: ICS4U1
// Description: Handles the express server that runs the web application
//
/////////////////

// Constants
const express = require("express");
const path = require("path");
const app = express();

const root = path.resolve(path.dirname(""));
const publicRoot = `${root}/public`;

// Middleware
app.use(express.static(`${root}/public`));

// Main
// Hardcoding the main pages for the site
app.get("/", (req, res) => {
  res.sendFile(`html/index.html`, { root: publicRoot });
})

app.get("/sources", (req, res) => {
  res.sendFile(`html/sources.html`, { root: publicRoot });
})

app.get("/future", (req, res) => {
  res.sendFile(`html/future.html`, { root: publicRoot });
})

// Setting up the server
app.listen(3001);