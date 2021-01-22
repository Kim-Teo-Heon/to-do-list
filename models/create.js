var db=require('../db');


module.exports={ 
  create_data: function(req){
    let sql = 'INSERT INTO lists(list,status) VALUES(?,?)';
    let post = req.body
    let list= post.list;
    let status= 'N';

    db.query(sql, [list,status],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }
}