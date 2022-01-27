// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      db.query(sql, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
  }

  static async create(data) {
    //buat promise 1 : insert data
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        err ? reject(err) : resolve(results.insertId);
      });
    });
    //buat promise 2 : select data By id
    const student = await this.find(id);
    return student;
  }
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      //query find by id
      db.query(sql, id, (err, results) => {
        const [student] = results;
        err ? reject(err) : resolve(student);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });

    const student = await this.find(id);
    return student;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
  }
}

// export class Student
module.exports = Student;
