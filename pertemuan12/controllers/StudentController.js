//buat class student controller
const Student = require("../models/Student");
class StudentController {
    async index(req, res) {
        const students = await Student.all();
        
        const data = {
            message : "Menampilkan semua student",
            data: students,
        }
        res.json(data);
    }
    store(req, res){
        const {nama} = req.body;
        res.send("Menamnah Semua Student " + nama);
    }
    update(req, res){
        const { id } = req.params;
        res.send('Mengedit Semua Student id: ${id}');
    }
    destroy(req, res) {
        const { id } = req.params;
        res.send("Menghapus Semua Student id: " + id);
    }
}
//res.send bentukan http tampilannya
//res.json bentukan json


//buat object
const object = new StudentController();

//export
module.exports = object;