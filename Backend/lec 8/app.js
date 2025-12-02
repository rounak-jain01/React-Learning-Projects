const express = require("express");
const app = express();

//Blogs Routes
{
  blogs = [];

  app.use(express.json());

  app.get("/blogs", function (req, res) {
    try {
      return res.status(200).json({ blogs });
    } catch (error) {
      return res.status(501).json({ message: "Please try again..." });
    }
  });

  app.get("/blogs/:id", function (req, res) {
    try {
      blog = blogs.filter((item) => item.id == req.params.id);
      return res.status(200).json(blog);
    } catch (error) {
      return res.status(501).json({ message: "Please try again..." });
    }
  });

  app.post("/blogs", function (req, res) {
    try {
      blogs.push({ ...req.body, id: blogs.length + 1 });
      return res.status(200).json({ blogs });
    } catch (error) {
      return res.status(501).json({ message: "Please try again..." });
    }
  });

  app.delete("/blogs/:id", function (req, res) {
    try {
      const filterBlogs = blogs.filter((item) => item.id != req.params.id);
      blogs = [...filterBlogs];
      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(501).json({ message: "Please try again..." });
    }
  });

  app.put("/blogs/:id", function (req, res) {
    try {
      const index = blogs.findIndex((item) => item.id == req.params.id);
      blogs[index] = { ...blogs[index], ...req.body };
      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(501).json({ message: "Please try again..." });
    }
  });
}

//Users Routes
{
  let users = [];

  app.get("/users", function (req, res) {
    try {
      if (users.length == 0) {
        return res.status(404).json({
          success: false,
          message: "Users Not Found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Users Fetch successfully",
        users,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Please Try again...",
      });
    }
  });

  app.post("/users", function (req, res) {
    try {
      const { uname, email, password } = req.body;

      if (!uname) {
        return res.status(404).json({
          success: false,
          message: "Please Enter your Name",
        });
      }
      if (!email) {
        return res.status(404).json({
          success: false,
          message: "Please Enter your Email",
        });
      }
      if (!password) {
        return res.status(404).json({
          success: false,
          message: "Please Enter your Password",
        });
      }
      users.push({ ...req.body, id: users.length + 1 });
      return res.status(200).json({
        success: true,
        message: "User Added Successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Please Try again...",
      });
    }
  });

  app.delete("/users/:id", function (req, res) {
    try {
      users = users.filter((user) => user.id != req.params.id);
    //   users = [...filteredUsers];
      return res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Please Try again...",
      });
    }
  });

  app.patch("/users/:id", function (req, res) {
    try {
      const index = users.findIndex((item) => item.id == req.params.id);
      users[index] = { ...users[index], ...req.body };
      return res.status(200).json({
        success: true,
        message: "User Updated Successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Please Try again...",
        error : error
      });
    }
  });
}

app.listen(3000, function () {
  console.log("Started...");
});
