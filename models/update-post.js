var db=require('../db');


module.exports={ 
  update_data: function(req){
    let sql = 'UPDATE lists SET list=?, status=? WHERE id=?';
    let post = req.body;
    let list= post.list;
    let status= post.status;
    let id = post.id;

    db.query(sql, [list,status,id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }
}