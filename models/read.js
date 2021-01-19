const db = require('../db');

exports.read_data = function(callback){
    let sql='SELECT * FROM lists';
    db.query(sql,(err, data)=>{
        if(err) {
            throw err;
        }
        return callback(data);
    })
}