//import db
const db = require("../config/database.js");

//class model student
class Student {
    //method untuk query semua data
    static all() {
        return new Promise(function (resolve,reject) {
             //query ke db
            const sql = "SELECT * FROM students";
            db.query(sql,function (err, results) {
                resolve(results) ;
            });  
        });
    }
    static create() {
        //return promise
        //insert data ke db
        //
        //
    }
}
//export class
module.exports = Student;