const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '741085',
    database : 'todolist'
})
db.connect();

module.exports = db;
