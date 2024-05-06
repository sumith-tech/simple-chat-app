const express = require("express");
const fs = require("fs");

const routes = express.Router();

routes.use("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "no chat";
    }
    res.send(
      `${data}<form action="/message" onsubmit="document.getElementById('username').value = localStorage.getItem('username')"  
      method="POST">
      <input type="text" name="message">
      <input type="hidden" name="username" id="username">
      <button type="submit">send</button></form>`
    );
  });
});

module.exports = routes;
