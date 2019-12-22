var express = require("express");
const cors = require("cors");
const path = require("path");
var app = express();

app
  .use(express.static("build"))
  .use(express.static("js"))
  .use(cors());

app.get("/widget", (req, res) => {
  res.sendFile(path.join(__dirname, "js/client.js"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build"));
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
