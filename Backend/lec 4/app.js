const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

filepath = path.join(__dirname, "index.html");

function changeData(req, res, route) {
    route = req.url.split("/")[1].charAt(0).toUpperCase()
  fs.readFile(filepath, "utf-8", function (err, data) {
      data = data.replace("[path]", route == "" ? "Home" : route)
      res.send(data)
  });
}

app.get("/", (req, res) => {
  changeData(req, res);
});

app.get("/about", (req, res) => {
changeData(req, res)
});
app.get("/contactus", (req, res) => {
  changeData(req, res);
});

app.listen(3000, function () {
  console.log("Server Started");
});
