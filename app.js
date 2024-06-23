const express = require('express');
const chalk = require('chalk')      //ให้ลงเป็น v.4.0.2 ไม่อย่างนั้นจะ run ไม่ได้
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter = express.Router()

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req,res) =>{
    res.send("Hello World !! I'm Product");
});

productRouter.route("/1").get((req,res) =>{
    res.send("Hello World !! I'm Product-1");
});

app.user("/products", productRouter)

app.get("/", (req,res) =>{
    //res.send('Hello Torza Co,. Ltd. // GG_EZ_55');
    res.render('index',{username: 'Torza555', customers:["torza", "bon", "migo"]});
})

app.listen(PORT, ()=>{
    // console.log("Listining on port" + chalk.red(" : "+port));            #คำสั่ง console.log
    debug("Listining on port" + chalk.red(" : "+PORT));
})