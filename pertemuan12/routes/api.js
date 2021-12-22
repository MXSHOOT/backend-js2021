//import express
const express = require("express");

//routing modular
const router = express.Router();

//definisikan routing 
router.get("/", function(req,res) {
    res.send("Hello Faris")
});

// routing untuk students
//import student controller
const StudentController = require("../controllers/StudentController");
// router.get("/students", function (req, res) {
//     StudentConstroller.index(req, res);
// });

// router.post("/students", function (req, res) {
//     StudentConstroller.store(req, res);
// });

// router.put("/students/:id", function (req, res) {
//     StudentConstroller.update(req, res);
// });

// router.delete("/students/:id", function (req, res) {
//     StudentConstroller.destroy(req,res);
// });

//callback routing
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;