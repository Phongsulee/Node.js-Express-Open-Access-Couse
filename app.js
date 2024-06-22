const express = require('express');
const chalk = require('chalk')      //ให้ลงเป็น v.4.0.2 ไม่อย่างนั้นจะ run ไม่ได้
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send('Hello Torza Co,. Ltd.');
})

app.listen(port, ()=>{
    // console.log("Listining on port" + chalk.red(" : "+port));            #คำสั่ง console.log
    debug("Listining on port" + chalk.red(" : "+port));
})