const express = require("express");
const fs = require("fs");
const app = express();

const path = __dirname + "/todos.json";

app.use(express.json());

app.get("/todos", function (req, res) {
  try {
    fs.readFile(path, "utf-8", (err, todos) => {
      todos = todos ? JSON.parse(todos) : [];
      return res.status(200).json({ todos });
    });
  } catch (err) {
    return res.status(500).json({ message: "Please try again..." });
  }
});

app.post("/todos", function (req, res) {
  try {
    fs.readFile(path, "utf-8", (err, todos) => {
      todos = todos ? JSON.parse(todos) : [];
      todos.push({ ...req.body, isChecked: false, id: todos.length + 1 });
      fs.writeFile(path, JSON.stringify(todos), "utf-8", (err) => {
        if (err) {
          return res.status(500).json({ message: "Please try again..." });
        } else {
          return res
            .status(200)
            .json({ message: "Todo Created Successfully..." });
        }
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "Please try again..." });
  }
});

app.delete("/todos/:id", function (req, res) {
  try {
    fs.readFile(path, "utf-8", (err, todos) => {
      todos = todos ? JSON.parse(todos) : [];
      const filtertodo = todos.filter((todo) => todo.id != req.params.id);

      fs.writeFile(path, JSON.stringify(filtertodo), "utf-8", (err) => {
        if (err) {
          return res.status(500).json({ message: "Please try again..." });
        } else {
          return res
            .status(200)
            .json({ message: "Todo Deleted Successfully..." });
        }
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "Please try again..." });
  }
});

app.put("/todos/:id", function (req, res) {
  try {
    fs.readFile(path, "utf-8", (err, todos) => {
      todos = todos ? JSON.parse(todos) : [];
      const index = todos.findIndex((todo) => todo.id == req.params.id);
      todos[index] = { ...todos[index], ...req.body };

      fs.writeFile(path, JSON.stringify(todos), "utf-8", (err) => {
        if (err) {
          return res.status(500).json({ message: "Please try again..." });
        } else {
          return res
            .status(200)
            .json({ message: "Todo Updated Successfully..." });
        }
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "Please try again..." });
  }
});

app.listen(3000, function () {
  console.log("Running");
});
