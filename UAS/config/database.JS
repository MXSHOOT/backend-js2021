// TODO 3: SETUP CONFIG DATABASE
//import mysql
const mysql = require("mysql");

//import dotenv
require("dotenv").config();

//membuat koneksi
const db = mysql.createConnection({
    //DB_ ada di dot env
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

//konek ke db
db.connect(function (err) {
    if(err){
        console.log("Koneks error"+err);
        return;
        }else{
        console.log("Koneksi berhasil");
    }
});

//export db
module.exports = db;