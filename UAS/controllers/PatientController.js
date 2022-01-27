// TODO 4: SETUP CONTROLLER
//buat class student controller
const Patient = require("../models/Patient.js");
class PatientController{
      async index(req, res){
          const patients = await Patient.all();

          if (patients.length > 0){
              
              const data = {
                  message : "Menampilkan semua patients",
                  data : patients,
              };
              return res.status(200).json(data); 
          } else {
              return res.status(200).json({message : "data kosong"})
          }
      }
      async store(req, res) {
        // destructing object 
        const { namaP, noHP, alamatP, statusP, tanggalM, tanggalK, timeS } = req.body;
    
        // jika tidak ditemukan akan memberikan status error
        if (!namaP || !noHP || !alamatP || !statusP || tanggalM || tanggalK || timeS ) {
          const data = {
            message: "Semua data harus dikirim",
          };
    
          return res.status(422).json(data);
        }
    
        // membuat method create dari model Patients.
        const student = await Patient.create(req.body);
    
        const data = {
          message: "Menambahkan data patients",
          data: student,
        };
    
        return res.status(201).json(data);
      }
    
      async update(req, res) {
        const { id } = req.params;
        // Mencari dan melakukan update
        const student = await Patient.find(id);

        if (student) {
          // Memanggil method update dari model Patients.
          const student = await Patient.update(id, req.body);
          const data = {
            message: `Mengedit data patients`,
            data: student,
          };
    
          return res.status(200).json(data);
        }
    
        // validasi jika tidak ditemukan
        const data = {
          message: `Patient not found`,
        };
    
        return res.status(404).json(data);
      }
    
      async destroy(req, res) {
        const { id } = req.params;
        // Mencari data yang ingin dihapus
        const student = await Patient.find(id);
    
        // Jika data ada, maka hapus data
        if (student) {
          // Memanggil method delete dari Model Patients
          await Student.delete(id);
          const data = {
            message: `Menghapus data patients`,
          };
    
          return res.status(200).json(data);
        }
    
        // validasi jika tidak ditemukan
        const data = {
          message: `Patients tidak ditemukan`,
        };
    
        return res.status(404).json(data);
      }
    
      async show(req, res) {
        const { id } = req.params;
        // Mencari data berdasarkan id
        const student = await Patient.find(id);
    
        // Jika data ada, maka tampilkan data
        if (student) {
          const data = {
            message: `Menampilkan detail patients`,
            data: student,
          };
    
          return res.status(200).json(data);
        }
    
        // validasi jika tidak ditemukan
        const data = {
          message: `Patients tidak ditemukan`,
        };
    
        res.status(404).json(data);
      }
      //untuk pencarian
      async search(req, res){
        const {name} = req.params; 
        const patients = await Patient.search(name);
        
        if (patients.length > 0) {
            const data = {
                message : `Get searched resource`,
                data : patients
            };
            res.status(200).json(data);
        }const gagal = {
            message: `Resource with name : ${name} not found`,
          };
          res.status(404).json(gagal);
      }
      //mengetahui postif
      async positive(req, res) {
        const patients = await Patient.findByStatus("positive");

        if (patients.length > 0){
            const data = {
                message : "Get positive resource",
                data : patients
            };

            return res.status(200).json(data);   
        }
        else {
            return res.status(200).json({message : "Data is empty"})
        }
      }
      async dead(req, res) {
        const patients = await Patient.findByStatus("dead");

        if (patients.length > 0){
            const data = {
                message : "Get dead resource",
                data : patients
            };

            return res.status(200).json(data);   
        }
        else {
            return res.status(200).json({message : "Data is empty"})
        }
      }
      //membuat mengetahui status
      async recovered(req, res) {
        const patients = await Patient.findByStatus("recovered");

        if (patients.length > 0){
            const data = {
                message : "Get recovered resource",
                data : patients
            };

            return res.status(200).json(data);
        }
        else {
            return res.status(200).json({message : "Data is empty"})
        }
      }
}       

//buat object
const object = new PatientController();

//export
module.exports = object;