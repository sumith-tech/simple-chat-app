const express = require("express");

const parser = require("body-parser");
const loginroute = require("./Routes/login");
const mesageroute = require("./Routes/message");

const app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(loginroute);
app.use(mesageroute);

app.listen(3000);
