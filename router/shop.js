const express = require("express");
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

const Router = express.Router();

Router.get("/", (req, res) => {
  console.log("shop.js " , adminData.products);
  res.sendFile(path.join(rootDir,'views', 'shop.html'));
});

module.exports = Router;
