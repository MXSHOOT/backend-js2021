// TODO 5: SETUP MODEL
//import db
const db = require("../config/database.js");

//class model student
class Patient {
    //method untuk query semua data
    static all() {
        return new Promise(function (resolve,reject) {
             //query ke db
            const sql = "SELECT * FROM patients WHERE id";
            db.query(sql,function (err, results) {
                resolve(results) ;
            });  
        });
    }
    static async create(data) {
        //buat promise 1 : insert data
        const id = await new Promise((resolve, reject)=> {
            const sql = "INSERT INTO patient SET ?";
            db.query(sql, data, (err, results)=> {  
                resolve(results.insertid);
            });
        });

        //buat promise 2 : select data By id
        return new Promise((resolve, reject)=>  {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, (err, results)=> {
                resolve(results);
            });
        });
    }
    static find(id) {
        return new Promise((resolve, reject)=> {
            //query find by id
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, (err, results)=> {
                resolve(results[0]);
            });
        });
    }
    static async update(id, data) {
        await new Promise((resolve, reject)=> {
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results)=> {
                resolve(results);
            });
        });
        return this.find(id)
    }
    
}
//export class
module.exports = Patient;