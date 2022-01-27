// import Model Student
const Student = require("../models/Student");

class StudentController {
  async index(req, res) {
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: "Menampilkkan semua students",
        data: students,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Students is empty",
    };

    return res.status(200).json(data);
  }

  async store(req, res) {
    // destructing object 
    const { nama, nim, email, jurusan } = req.body;

    // jika tidak ditemukan akan memberikan status error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    // membuat method create dari model Student.
    const student = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: student,
    };

    return res.status(201).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    // Mencari data yang ingin diupdate
    const student = await Student.find(id);

    if (student) {
      // Memanggil method update dari model Student.
      const student = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data students`,
        data: student,
      };

      return res.status(200).json(data);
    }

    // validasi jika tidak ditemukan
    const data = {
      message: `Student not found`,
    };

    return res.status(404).json(data);
  }

  async destroy(req, res) {
    const { id } = req.params;
    // Mencari data yang ingin dihapus
    const student = await Student.find(id);

    // Jika data ada, maka hapus data
    if (student) {
      // Memanggil method delete dari Model Student
      await Student.delete(id);
      const data = {
        message: `Menghapus data students`,
      };

      return res.status(200).json(data);
    }

    // validasi jika tidak ditemukan
    const data = {
      message: `Student not found`,
    };

    return res.status(404).json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    // Mencari data berdasarkan id
    const student = await Student.find(id);

    // Jika data ada, maka tampilkan data
    if (student) {
      const data = {
        message: `Menampilkan detail students`,
        data: student,
      };

      return res.status(200).json(data);
    }

    // validasi jika tidak ditemukan
    const data = {
      message: `Student not found`,
    };

    res.status(404).json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
