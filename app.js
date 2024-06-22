const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const port = 3000;



mongoose.connect('mongodb://127.0.0.1/nodeblog_db')
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error(err));





app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

const main = require('./routes/main')
app.use('/',main )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
