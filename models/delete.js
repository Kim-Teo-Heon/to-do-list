var db=require('../db');

module.exports={ 
  delete_data: function(req){
    let sql = 'DELETE FROM lists WHERE id=?';
    let id = req.params.page_id;

    db.query(sql, [id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }
}