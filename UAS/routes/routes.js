// TODO 2: SETUP ROUTING (ROUTER)

//import express
const express = require("express");
//routing modular
const router = express.Router();

//definisikan routing 
router.get("/", function(req,res) {
    res.send("Hello Faris")
});

const PatientController = require("../controllers/PatientController.js");

router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
router.get("/patients/:id", PatientController.show);
router.put("/patients/:id", PatientController.update);
router.delete("/patients/:id", PatientController.destroy);
router.get("/patients/search/:name", PatientController.search);
router.get("/patients/status/positive", PatientController.positive);
router.get("/patients/status/dead", PatientController.dead);
router.get("/patients/status/recovered", PatientController.recovered);

module.exports = router;
