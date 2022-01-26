/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

// buat server
// import express
const express = require("express");
//buat object / server
const app  = express();

// definisikan port
app.listen(3000, function () {
    console.log("Server berjalan di: http://localhost:3000");
});

//pakai router
const router = require("./routes/routes.js");
app.use(express.json())//untuk diubah json menjadi objek terlebih dahulu
app.use(router);



