var db=require('../db');


module.exports={ 
  update_data: function(req){
    let sql = 'UPDATE lists SET status=? WHERE id=?';
    let post = req.body;
    let status= post.status;
    let id = req.params.page_id;

    console.log(id);

    db.query(sql, [status,id],function (err, data) {
    if(err) {
      throw err;
    }
    console.log('success');
    });
  }
}