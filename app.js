const express = require('express');
const chalk = require('chalk')      //ให้ลงเป็น v.4.0.2 ไม่อย่างนั้นจะ run ไม่ได้
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 4000;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/products", productsRouter)

app.get("/", (req, res) => {
    //res.send('Hello Torza Co,. Ltd. // GG_EZ_55');
    res.render('index', { username: 'Torza555', customers: ["torza", "bon", "migo"] });
})

app.listen(PORT, () => {
    // console.log("Listining on port" + chalk.red(" : "+port));            #คำสั่ง console.log
    debug("Listining on port" + chalk.red(" : " + PORT));
})