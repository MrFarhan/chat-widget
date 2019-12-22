var express = require("express");
const cors = require("cors");
const path = require("path");
var app = express();

app
  .use(express.static("build"))
  .use(express.static("js"))
  .use(cors());

app.get("/widget", (req, res) => {
  // here we can add check if we have app_id valid or not
  res.sendFile(path.join(__dirname, "js/client.js"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build"));
});

app.listen(4000, () => {
  console.log(`server is running on port ${4000}`);
});
