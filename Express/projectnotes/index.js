const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
    fs.readdir("./files", (err, files) => {
        let filedata = [];

        files.forEach(filename => {
            const data = fs.readFileSync(`./files/${filename}`, "utf8");
            filedata.push(data);
        });

        res.render("index", { files, filedata });
    })
}
);

app.post("/create", function(req, res){
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`,req.body.taskdesc, function(err){
        console.log(err)
    })
    res.redirect("/")
})

app.get("/files/:val", function(req, res){
    fs.readFile(`./files/${req.params.val}`,"utf8", function(err, data){
        res.render("readmore", { filename: req.params.val, content: data });
        // console.log(filedata) 
    })
})

app.listen(3000, () => console.log("Server Running"));
