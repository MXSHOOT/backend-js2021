// buat server
// import express
const express = require("express");
const router = require("./routes/api.js");
//buat object / server
const app  = express();

// definisikan port
app.listen(3000, function () {
    console.log("Server berjalan di: http://localhost:3000");
});

//pakai router
const router = require("./routes/api");
app.use(express.json())//untuk diubah json menjadi objek terlebih dahulu
app.use(router);
