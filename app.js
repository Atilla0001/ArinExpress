const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("site/index");
});


app.get("/about", (req, res) => {
  res.render("site/about");
});
app.get("/blog", (req, res) => {
  res.render("site/blog");
});
app.get("/contact", (req, res) => {
  res.render("site/contact");
});
app.get("/login", (req, res) => {
  res.render("site/login");
});
app.get("/register", (req, res) => {
  res.render("site/register");
});



app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/blog.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
