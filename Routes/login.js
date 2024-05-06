const express = require("express");
const fs = require("fs");

const routes = express.Router();

routes.get("/login", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input type="text" name="username" id="username"</input><button type="submit">Submit</button></form>'
  );
});

routes.post("/message", (req, res, next) => {
  const message = req.body.message;
  const username = req.body.username;
  console.log(username, message);

  fs.writeFile("message.txt", `${username}:${message}`, { flag: "a" }, (err) =>
    err ? console.log(err) : console.log(message)
  );
  res.redirect("/");
});

module.exports = routes;
